/* istanbul ignore file */

import cloneDeep from "lodash/cloneDeep";
import isEqual from "lodash/isEqual";
import { EXCLUDE_ID_PARAM } from "../constants";


export const getRandomColor = (): string => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

export const truncateDescription = (description: string, maxLength: number): string => {
  if (description.length > maxLength) {
    return description.substring(0, maxLength) + '...';
  }
  return description;
};

export const replaceNullOrUndefinedByEmptyString = (
  obj: Record<string, any>
): Record<string, any> => {
  Object.keys(obj).forEach(function (key: string) {
    if (obj[key] === null || obj[key] === undefined) {
      obj[key] = "";
    }
  });
  return obj;
};

/* istanbul ignore next */ // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const removeNullishProperties = (obj: any): any => {
  Object.keys(obj).forEach((key) => {
    if (!obj[key]) {
      delete obj[key];
    }
  });
  return obj;
};

export const objectGetParamsToString = (o: Record<string, any>): string => {
  const str = [];
  for (const p in o) {
    (o[p] || o[p] === "" || o[p] === 0) &&
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(o[p]));
  }
  return str.join("&");
};
/* istanbul ignore next */
export const replaceEntitiesArrayByIdsArray = <
  T extends { id?: number } | number
>(
  obj: Record<string, T[]>
): Record<string, (number | undefined)[]> => {
  const newObj: Record<string, (number | undefined)[]> = {};
  Object.keys(obj).forEach((key: string) => {
    newObj[key] = obj[key].reduce((result: (number | undefined)[], entity) => {
      typeof entity === "object" && result.push(entity.id);
      return result;
    }, []);
  });
  return newObj;
};

export const replaceEntityById = <T extends { id?: number } | null>(
  obj: Record<string, T>
): Record<string, number | string> => {
  const newObj: Record<string, number | string> = {};
  Object.keys(obj).forEach((key: string) => {
    newObj[key] = obj[key]?.id ?? String("");
  });
  return newObj;
};

/* istanbul ignore next */
export const getModifiedKeys = <T extends Record<string, any>>(
  initialValues: T,
  values: T,
  ignore?: string[]
): T => {
  const newObj: T = cloneDeep(values);
  const keys = Object.keys(initialValues);

  keys.forEach((item) => {
    const oldValue = initialValues[item];
    const newValue = values[item];
    if (!ignore?.includes(item) && isEqual(oldValue, newValue)) {
      delete newObj[item];
    }
  });
  return newObj;
};

/* istanbul ignore next */
export const constructFormData = <T extends Record<string, any>>(
  values: T
): FormData => {
  const keys = Object.keys(values);
  const formData = new FormData();
  for (const i of keys) {
    if (typeof values[i] === "boolean") {
      formData.append(i, Number(values[i]).toString());
    } else {
      formData.append(i, values[i]);
    }
  }
  return formData;
};

// Format string "12.345.678,09" to number 12345678.09
export const parseNumber = <T>(str: T, allowNegative = false): number => {
  let result = String(str).replace(allowNegative ? /[^-0-9]/g : /[^0-9]/g, "");
  if (/[,.]\d{1}$/.test(String(str))) {
    result = result.replace(/(\d{1})$/, ".$1");
  } else if (/[,.]\d{2}$/.test(String(str))) {
    result = result.replace(/(\d{2})$/, ".$1");
  }
  return Number(String(result));
};

export const replaceStringByParsedNumber = <T>(
  obj: Record<string, T>
): Record<string, number> => {
  const newObj: Record<string, number> = {};
  Object.keys(obj).forEach((key: string) => {
    newObj[key] = parseNumber(obj[key]);
  });
  return newObj;
};

export const isValid = (item: string | number | undefined): boolean =>
  item != undefined && true && item != "";

export const prepareQueryParams = (
  queryParams: string,
  obj: Record<string, string | undefined | number>,
  appendEmpty = false,
  excludeIds?: (string | number | undefined)[]
): string => {
  const params = new URLSearchParams(queryParams);

  Object.keys(obj)?.forEach(
    (key) =>
      ((appendEmpty && obj[key] === "") || isValid(obj[key])) &&
      params.append(key, encodeURIComponent(obj[key]!))
  );

  excludeIds?.length && params.delete(EXCLUDE_ID_PARAM);

  excludeIds?.forEach(
    (item) =>
      isValid(item) &&
      params.append(EXCLUDE_ID_PARAM, encodeURIComponent(item!))
  );

  return `?${decodeURIComponent(params.toString())}`;
};

export const downloadFile = (
  blob: Blob,
  fileName: string,
  extension: string
): void => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${fileName}.${extension}`;
  document.body.append(link);
  link.click();
  link.remove();
};
/* istanbul ignore next */
export const formatToNumber = (amount?: number | string): number => {
  const removeDot = amount?.toString().replace(".", "").replace(",", ".");
  return Number(removeDot);
};

export const generalPropertyOption = {
  id: "0",
  object_name: "General",
};

export const DEBOUNCE_TIME = 500;

export enum FILTER_TYPE {
  ALL = "All",
  GENERAL = "General",
}

export interface FilterTypeProps {
  name: string;
  value: string;
}

export const filterType: FilterTypeProps[] = [
  { name: "all", value: FILTER_TYPE.ALL },
  { name: "general", value: FILTER_TYPE.GENERAL },
];

/* istanbul ignore next */
export const objTypeGuard = <T>(
  item: unknown,
  conditionStr: (keyof T)[]
): item is T => {
  return (
    item !== undefined &&
    item !== null &&
    typeof item === "object" &&
    conditionStr.every((i) => i in item)
  );
};
export const FILE_SIZE_5_MB = 5242880;

export const getFirstLettersFromFullName = (fullName: string): string => {
  const countWords = fullName.split(" ").filter((word) => word !== "").length;
  const firstWord = fullName.split(" ")[0],
    secondWord = fullName.split(" ")[1];
  return countWords === 1
    ? (firstWord[0] + firstWord[1])?.toUpperCase()
    : (firstWord[0] + secondWord[0])?.toUpperCase();
};

export enum DELAY {
  _30 = 30,
  _100 = 100,
}
