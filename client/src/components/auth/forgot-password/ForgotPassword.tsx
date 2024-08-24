import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Box, Typography } from "@mui/material";
import { Brand, Wrapper } from "./styled";
import {
  forgotPasswordFormInitData,
  handleForgotPasswordFormSubmit,
} from "./utils";
import { Formik } from "formik";
import { useTranslation } from "react-i18next";
import ForgotPasswordForm from "./ForgotPasswordForm";
import { FormMessageInItState } from "../../../constants";
import FormAlert from "../../../ui/formAlert/FormAlert";
import * as Yup from "yup";
import useValidation from "../../../hooks/useValidation";

function ForgotPassword(): React.ReactElement {
  const { t } = useTranslation();
  const [formMessage, setFormMessage] = useState(FormMessageInItState);

  const { email } = useValidation();

  return (
    <React.Fragment>
      <Wrapper>
        <Helmet title={t("forgotPassword")} />
        <Box sx={{ justifyContent: "center", display: "flex" }}>
          <Brand />
        </Box>

        {formMessage.text ? (
          <FormAlert formMessage={formMessage} />
        ) : (
          <Typography component="h2" variant="body1" align="center">
            {t("enterYourEmailToResetYourPassword")}
          </Typography>
        )}
        <Formik
          initialValues={forgotPasswordFormInitData}
          validationSchema={Yup.object().shape({ email })}
          onSubmit={handleForgotPasswordFormSubmit({
            setFormMessage,
          })}
        >
          {(props): React.ReactElement => <ForgotPasswordForm {...props} />}
        </Formik>
      </Wrapper>
    </React.Fragment>
  );
}

export default ForgotPassword;
