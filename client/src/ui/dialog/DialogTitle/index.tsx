import React, { ReactElement } from "react";
import { DialogTitleProps } from "./types";
import { StyledDialogTitle } from "./styled";
import { Typography } from "@mui/material";
import CloseButton from "../CloseButton";
import { useTranslation } from "react-i18next";
/* istanbul ignore next */
const DialogTitle = ({
  title,
  onClose,
  ...props
}: DialogTitleProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <StyledDialogTitle {...props}>
      <Typography variant="h6" component="div">
        {t(title)}
      </Typography>
      {onClose && <CloseButton onClick={onClose} />}
    </StyledDialogTitle>
  );
};

export default DialogTitle;
