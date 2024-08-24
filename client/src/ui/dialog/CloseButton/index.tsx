import React, { ReactElement } from "react";
import { CloseButtonProps } from "./types";
import { IconButton } from "./styled";
import CloseIcon from "@mui/icons-material/Close";
/* istanbul ignore next */
const CloseButton = ({
  onClick,
  disabled = false,
  ...props
}: CloseButtonProps): ReactElement => {
  return (
    <IconButton
      aria-label="close"
      data-testid="close-icon"
      role="close-icon"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      <CloseIcon />
    </IconButton>
  );
};

export default CloseButton;
