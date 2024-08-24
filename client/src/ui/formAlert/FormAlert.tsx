import React from "react";
import { Alert, Fade } from "@mui/material";
import { AlertProps } from "./types";
import { FormMessageWrapper } from "./styled";
import { useTranslation } from "react-i18next";

const FormAlert = ({
  formMessage,
  ...props
}: AlertProps): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <FormMessageWrapper {...props}>
      <Fade in={Boolean(formMessage.text)}>
        <Alert style={{ width: "100%" }} severity={formMessage.type}>
          {t(formMessage.text)}
        </Alert>
      </Fade>
    </FormMessageWrapper>
  );
};

export default FormAlert;
