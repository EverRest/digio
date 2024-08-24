import React from "react";
import { SxProps, Theme } from "@mui/system";
import { FormMessageInterface } from "../../types/form";

export interface AlertProps {
  formMessage: FormMessageInterface;
  sx?: SxProps<Theme> | undefined;
  style?: React.CSSProperties | undefined;
}
