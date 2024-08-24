import { CheckboxProps } from "@mui/material";

export type Props =
  | CheckboxProps
  | {
    name: string;
  };

export interface CheckboxWrapperProps {
  defaultValue?: boolean;
  id: string;
  name: string;
  onChange: (id: number, checked: boolean) => void;
}