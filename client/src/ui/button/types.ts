import { ReactElement } from "react";

export interface Button {
  title: string;
  disabled?: boolean;
  color?:
  | "inherit"
  | "primary"
  | "secondary"
  | "success"
  | "error"
  | "info"
  | "warning"
  | undefined;
  variant?: "contained" | "text" | "outlined" | undefined;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  isLoading?: boolean;
  testId?: string;
  sx?: any;
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  endIcon?: ReactElement;
  startIcon?: ReactElement;
  className?: string;
}
