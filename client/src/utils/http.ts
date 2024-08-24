import { REACT_APP_SERVER_URL } from "../config";
import { HandleServerErrorType, HTTP_STATUS_CODES } from "../types/server";
import { emitCustomEvent } from "react-custom-events";
import { VERSION_CONTROL_KEY } from "../constants";
import { persistor } from "../redux/store";
const { fetch: originalFetch } = window;
window.fetch = async (...args) => {
  const [resource, config] = args;
  const response = await originalFetch(resource, config);
  await checkUiVersion(response);
  if (response.status === 401) emitCustomEvent("logout");
  return response;
};

/* istanbul ignore next */
const checkUiVersion = async (response: Response): Promise<void> => {
  const cacheVersion = localStorage.getItem(VERSION_CONTROL_KEY);
  const latestVesion = response.headers.get(VERSION_CONTROL_KEY);
  const currentLang = window.localStorage.getItem("lang");
  if (!currentLang && latestVesion) {
    window.localStorage.setItem(VERSION_CONTROL_KEY, latestVesion);
  } else if (latestVesion && cacheVersion !== latestVesion) {
    const storePersist = window.localStorage.getItem("persist:root");
    window.localStorage.clear();
    window.localStorage.setItem(VERSION_CONTROL_KEY, latestVesion);
    if (storePersist) {
      persistor.pause();
      await persistor.flush();
    }
    if (currentLang) {
      window.localStorage.setItem("lang", currentLang!);
    }
    if (currentLang) {
      window.location.reload();
    }
  }
};

export type Headers = {
  "Content-Type"?: "application/json";
  Accept: "application/json";
  "Access-Control-Allow-Origin": "*";
  "X-LANGUAGE": string;
  Authorization: string;
};
export const headers = (includeContentType = true): Headers => {
  const headers: Headers = {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "X-LANGUAGE": `${window.localStorage.getItem("lang")}`,
    Authorization: `Bearer ${window.localStorage.getItem("accessToken")}`,
  };

  /* istanbul ignore next */
  if (includeContentType) {
    headers["Content-Type"] = "application/json";
  }

  return headers;
};

interface CancelControllers {
  [url: string]: AbortController;
}

const cancelSignals: CancelControllers = {};
/* istanbul ignore next */
function handleAbort(path: string): AbortSignal {
  const [base] = path.split("?");
  let controller = cancelSignals[base];

  if (controller) {
    controller?.abort();
  }

  controller = new AbortController();
  cancelSignals[base] = controller;

  return controller.signal;
}
/* istanbul ignore next */
export default {
  get: async (path: string, cancelPrevious = false): Promise<any> => {
    const config: RequestInit = {
      mode: "cors" as RequestMode | undefined,
      headers: headers(),
    };

    if (cancelPrevious) {
      config.signal = handleAbort(path);
    }

    return await fetch(REACT_APP_SERVER_URL + path, config);
  },
  post: async (
    path: string,
    data: Record<string, any>,
    options?: { headers: Headers }
  ): Promise<Response> => {
    let body: string | Record<string, any> = data;
    if (data instanceof FormData && !data.has("_method"))
      data.append("_method", "POST");
    else if (!(data instanceof FormData)) body = JSON.stringify(data);
    return await fetch(REACT_APP_SERVER_URL + path, {
      mode: "cors" as RequestMode | undefined,
      headers: options?.headers ?? headers(!(data instanceof FormData)),
      // @ts-ignore
      body,
      method: "POST",
    });
  },
  put: async (
    path: string,
    body: Record<string, any>,
    options?: { headers: Headers }
  ): Promise<Response> => {
    return await fetch(REACT_APP_SERVER_URL + path, {
      mode: "cors" as RequestMode | undefined,
      headers: options?.headers ?? headers(),
      body: JSON.stringify(body),
      method: "PUT",
    });
  },

  patch: async (
    path: string,
    body?: Record<string, any>,
    options?: { headers: Headers }
  ): Promise<Response> => {
    return await fetch(REACT_APP_SERVER_URL + path, {
      mode: "cors" as RequestMode | undefined,
      headers: options?.headers ?? headers(),
      body: JSON.stringify(body),
      method: "PATCH",
    });
  },

  delete: async (
    path: string,
    body?: Record<string, any>,
    options?: { headers: Headers }
  ): Promise<Response> => {
    return await fetch(REACT_APP_SERVER_URL + path, {
      mode: "cors" as RequestMode | undefined,
      headers: options?.headers ?? headers(),
      body: body ? JSON.stringify(body) : null,
      method: "DELETE",
    });
  },
  uploadFileHandler: (
    method: string,
    path: string,
    formdata: FormData,
    progressCallBack: (event: ProgressEvent) => void
  ): Promise<Response> => {
    return new Promise((resolve, reject) => {
      const ajax = new XMLHttpRequest();
      ajax.open(method, REACT_APP_SERVER_URL + path);
      ajax.upload.addEventListener("progress", progressCallBack, false);
      ajax.setRequestHeader("Access-Control-Allow-Origin", "*");
      ajax.setRequestHeader("Accept", "application/json");
      ajax.setRequestHeader(
        "X-LANGUAGE",
        `${window.localStorage.getItem("lang")}`
      );
      ajax.setRequestHeader(
        "Authorization",
        `Bearer ${window.localStorage.getItem("accessToken")}`
      );
      ajax.onreadystatechange = () => {
        if (
          [HTTP_STATUS_CODES.CREATED, HTTP_STATUS_CODES.OK].includes(
            ajax.status
          )
        )
          resolve(JSON.parse(ajax.response || {}));
        else {
          reject(JSON.parse(ajax.response || {}));
        }
      };
      ajax.send(formdata);
    });
  },
};

export const getServerErrorMessage = (
  status: number,
  statusText: string
): string => {
  return `Error: status ${status} ${statusText}`;
};

export const handleServerError = (res: Response): HandleServerErrorType => {
  const errorMessage = getServerErrorMessage(res.status, res.statusText);
  return {
    errorMessage,
  };
};
/* istanbul ignore next */
export const getJson = (res: Response): Promise<any> | never => {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`${res.status} ${res.statusText}`);
  }
};
