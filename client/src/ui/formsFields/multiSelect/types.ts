import { FieldInputProps } from "formik";

export interface MultiSelectProps {
  name: string;
  label?: string;
  size?: "medium" | "small";
  status?: { errors?: Record<string, string> };
  minHeight?: string;
}

export interface ConfigMultiSelectProps<T> extends FieldInputProps<T> {
  error?: boolean;
  helper?: string;
}
