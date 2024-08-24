import { SelectChangeEvent } from "@mui/material";
import { FormikValues } from "formik/dist/types";
import camelCase from "lodash/camelCase";

export const mapBackendValidationErrors = (
  errors: Record<string, Array<string>>
): Record<string, string> => {
  const mappedErrors = {} as Record<string, string>;
  for (const [key, value] of Object.entries(errors))
    mappedErrors[key] = value[0];
  return mappedErrors;
};

export const handleDatepicker = (
  { setFieldValue }: FormikValues,
  field: string
) => {
  return (date: Date | null): void => {
    setFieldValue(field, date);
  };
};
interface HeadSellSettings {
  id: string;
  label: string;
  title: string;
  numeric: boolean;
  disablePadding: boolean;
  sortable: boolean;
  align: "left" | "right" | "center" | undefined;
}
/* istanbul ignore next */
export const headSellSettings = (
  id: string,
  prefix: string,
  numeric = false,
  disablePadding = false,
  sortable = false,
  align = "left" as "left" | "right" | "center" | undefined,
  title = ""
): HeadSellSettings => {
  return {
    id,
    label: `${prefix}.${camelCase(id)}`,
    title,
    numeric,
    disablePadding,
    sortable,
    align,
  };
};
/* istanbul ignore next */
export const handleMultiSelector =
  <T>({ setFieldValue }: FormikValues, field: string) =>
  (event: SelectChangeEvent<T>): void => {
    const {
      target: { value },
    } = event;
    setFieldValue(field, value);
  };
