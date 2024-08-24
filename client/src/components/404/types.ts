import { SpacingProps } from "@mui/system";
import React from "react";

export interface ButtonProps extends SpacingProps {
  component?: React.ElementType;
  to?: string;
  target?: string;
}
