import fetch, { MockResponseInit } from "jest-fetch-mock";
import { REACT_APP_SERVER_URL } from "../config";
import { HTTP_METHODS } from "../types/server";
import { MockResponseObject } from "../types/tests";

/* istanbul ignore next */
export const mockServerResponse = (
  ...mocks: {
    method: HTTP_METHODS;
    url: string;
    data: {
      data: any;
      meta?: {
        total: number;
      };
    };
    status?: number;
  }[]
): void => {
  let mock;
  fetch.mockResponse((req: Request): Promise<MockResponseInit | string> => {
    mock = mocks.find((mock) => {
      return (
        `${REACT_APP_SERVER_URL}/api/${mock.url}` === req.url &&
        req.method === mock.method
      );
    });
    if (mock) {
      return Promise.resolve({
        body: JSON.stringify(mock.data),
        init: { status: mock.status },
      });
    } else {
      const message = `No mock for endpoint METHOD: ${req.method}, URL: ${req.url}`;
      return Promise.reject(message);
    }
  });
};

/**
 * The function will be a replacement for mockServerResponse later on
 */
/* istanbul ignore next */
export function mockServerResponse1(...mocks: MockResponseObject[]): void {
  let mock;
  fetch.mockResponse((req: Request): Promise<MockResponseInit | string> => {
    const endpoint = req.url.split("?")[0];
    mock = mocks.find((mock) => {
      return (
        `${REACT_APP_SERVER_URL}/api/${mock.url}` === endpoint &&
        req.method === mock.method
      );
    });
    if (mock) {
      return Promise.resolve({
        body: JSON.stringify(mock.data),
        init: { status: mock.status },
      });
    } else {
      const message = `No mock for endpoint METHOD: ${req.method}, URL: ${req.url}`;
      console.log(message);
      return Promise.reject(message);
    }
  });
}

export const mockApiResponseWithServerError = (): void => {
  fetch.mockResponse(
    JSON.stringify({
      message: "",
      exception: "",
      file: "",
      line: 0,
      trace: [],
    }),
    {
      status: 500,
      statusText: "Internal Server Error",
    }
  );
};

/**
 * Function for mocking server responses with the 500 status code and will be used instead of mockApiResponseWithServerError
 * Mocks passed in to the function will be mocked accordingly to the settings of these mocks
 * @param exceptMocks
 */
/* istanbul ignore next */
export function mockApiResponseWithServerError1(
  ...exceptMocks: MockResponseObject[]
): void {
  let mock;
  const mocks = exceptMocks ? exceptMocks : [];
  fetch.mockResponse((req: Request): Promise<MockResponseInit | string> => {
    const endpoint = req.url.split("?")[0];
    mock = mocks.find((mock) => {
      return (
        `${REACT_APP_SERVER_URL}/api/${mock.url}` === endpoint &&
        req.method === mock.method
      );
    });
    if (mock) {
      return Promise.resolve({
        body: JSON.stringify(mock.data),
        init: { status: mock.status },
      });
    } else {
      return Promise.resolve({
        body: JSON.stringify({
          message: "",
          exception: "",
          file: "",
          line: 0,
          trace: [],
        }),
        init: {
          status: 500,
          statusText: "Internal Server Error",
        },
      });
    }
  });
}
/* istanbul ignore next */
export const mockServerResponseWithValidationErrors = (
  message: string,
  errors: Record<string, string[]>,
  status?: Record<string, number>,
  exceptMocks?: MockResponseObject[]
): void => {
  let mock;
  const mocks = exceptMocks ? exceptMocks : [];
  fetch.mockResponse((req: Request): Promise<MockResponseInit | string> => {
    const endpoint = req.url.split("?")[0];
    mock = mocks.find((mock) => {
      return (
        `${REACT_APP_SERVER_URL}/api/${mock.url}` === endpoint &&
        req.method === mock.method
      );
    });
    if (mock) {
      return Promise.resolve({
        body: JSON.stringify(mock.data),
        init: { status: mock.status },
      });
    } else {
      return Promise.resolve({
        body: JSON.stringify({
          message: message,
          errors: errors,
        }),
        init: {
          ...status,
        },
      });
    }
  });
};

export interface MockFileData {
  dataTransfer: {
    files: File[];
    items: {
      kind: string;
      type: string;
      getAsFile: () => File;
    }[];
    types: string[];
  };
}
/* istanbul ignore next */
export const mockFileData = (files: File[]): MockFileData => ({
  dataTransfer: {
    files,
    items: files.map((file) => ({
      kind: "file",
      type: file.type,
      getAsFile: () => file,
    })),
    types: ["Files"],
  },
});
