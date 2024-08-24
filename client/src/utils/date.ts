/* istanbul ignore file */

import moment, { Moment, MomentInput } from "moment";

export const dateNowSeconds = (): number => {
  return Math.floor(Date.now() / 1000);
};

/* istanbul ignore next */
export const timestampToFromNow = <T extends number | string | null>(
  timestamp: T
): string => {
  return moment.unix(Number(timestamp)).fromNow();
};

export const epochToTimeStamp = (epoch: number): number => {
  return epoch * 1000;
};

export const formatTimestamp = <T extends number | string | null | undefined>(
  timestamp: T,
  format = "DD.MM.yyyy"
): string => {
  return timestamp ? moment.unix(Number(timestamp)).format(format) : "";
};

/* istanbul ignore next */
export const yearFromDate = <T extends Date | string>(
  timestamp: T,
  format = "yyyy"
): string => {
  return timestamp ? moment(timestamp).format(format) : "";
};

export const replaceTimestampByMomentDateOrNull = <
  T extends number | null | string | Moment
>(
  obj: Record<string, T>
): Record<string, Moment | string | null> => {
  const newObj: Record<string, Moment | string | null> = {};
  Object.keys(obj).forEach((key: string) => {
    newObj[key] =
      typeof obj[key] === "string"
        ? String(obj[key])
        : typeof obj[key] === "number"
        ? moment(moment.unix(Number(obj[key])), "dd.mm.yyyy HH:MM")
        : null;
  });

  return newObj;
};

export const replaceTimestampByStringDate = <T extends number | string | null>(
  obj: Record<string, T>
): Record<string, string | null> => {
  const newObj: Record<string, string | null> = {};
  Object.keys(obj).forEach((key: string) => {
    newObj[key] = formatTimestamp(Number(obj[key]));
  });
  return newObj;
};

export const replaceMomentDateByTimestamp = (
  obj: Record<string, Moment | Date | number | null>
): Record<string, number | null> => {
  const newObj: Record<string, number | null> = {};
  Object.keys(obj).forEach((key: string) => {
    /* istanbul ignore next */
    newObj[key] = parseInt(moment(obj[key]).format("X")) || null;
  });
  return newObj;
};

export const replaceTimestampByMomentDatepicker = <T>(
  value: T
): moment.Moment => value && moment(moment.unix(Number(value)), "MM/DD/YYYY");

export const replaceMomentByTimestamp = (value: MomentInput): number =>
  parseInt(moment(value).format("X"));

export const formationDateForBackEnd = (
  value: number | null | string | Date
): string | null => {
  return value ? moment(value).format("YYYY-MM-DD") : null;
};

export const replaceMomentByFormatedString = (
  value: Moment,
  format = "YYYY-MM-DD"
): string => value.format(format);

export const formatDateToTimespamp = (date?: Date): number =>
  Date.parse(String(date)) / 1000;

export const getFirstDayOfYear = (): Date =>
  new Date(new Date().getFullYear(), 0, 1);

export const getLastDayOfYear = (): Date =>
  new Date(new Date().getFullYear(), 11, 31);

export const isWeekend = (date: Moment): boolean =>
  ![6, 7].includes(date.isoWeekday());

export const getFirstWorkingDayOfMonth = (start = 1): Moment => {
  const startOfMonth = moment().date(start).subtract(1, "days");
  do {
    startOfMonth.add(1, "days");
  } while (!isWeekend(startOfMonth));
  return startOfMonth;
};

export const getLastWorkingDayOfMonth = (end = 31): Moment => {
  const endOfMonth = moment().date(end).add(1, "days");
  do {
    endOfMonth.subtract(1, "days");
  } while (!isWeekend(endOfMonth));
  return endOfMonth;
};

/* istanbul ignore next */
export const removeCommaAndZeroFromString = (value: string | null): string => {
  if (value === null) return "";
  if (value.slice(-2) !== ".0") return value;
  return value.charAt(0);
};

export const isDateFuture = (dateInSeconds: number): boolean =>
  dateInSeconds > Number((Date.now() / 1000).toFixed());

export const isDatePast = (dateInSeconds: number): boolean =>
  dateInSeconds < Number((Date.now() / 1000).toFixed());
