import React from "react";
import Loader from "../../components/Loader";
import { Button as MUIButton } from "@mui/material";
import { Button as ButtonProps } from "./types";

const Button = ({
  title,
  disabled = false,
  color = "primary",
  variant = "contained",
  type = "submit",
  fullWidth = false,
  isLoading = false,
  sx = { ml: "0rem" },
  testId = "",
  size = "small",
  endIcon,
  startIcon,
  onClick = (): void => {},
  className,
}: ButtonProps): React.ReactElement => {
  return (
    <MUIButton
      onClick={onClick}
      data-testid={testId}
      type={type}
      sx={sx}
      fullWidth={fullWidth}
      variant={variant}
      color={color}
      disabled={disabled}
      size={size}
      className={className}
      endIcon={endIcon}
      startIcon={startIcon}
    >
      {!isLoading ? <>{title}</> : <Loader size={20} />}
    </MUIButton>
  );
};

export default Button;
