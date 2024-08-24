import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Wrapper } from "./styled";
import {
  handleResetPasswordFormSubmit,
  resetPasswordFormInitData,
} from "./utils";
import { Formik } from "formik";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ResetPasswordForm from "./ResetPasswordForm";
import { Box, Typography } from "@mui/material";
import { FormMessageInItState } from "../../../constants";
import FormAlert from "../../../ui/formAlert/FormAlert";
import * as Yup from "yup";
import useValidation from "../../../hooks/useValidation";
import { BrandLogo } from "../sign-in/styled";
import CompanyLogo from "../../../vendor/logo/image3+.png";
import useAppSelector from "../../../hooks/useAppSelector";

function ResetPassword(): React.ReactElement {
  const { _user } = useAppSelector((state) => state.user);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const email = params.get("email");
  const token = params.get("token");

  const [formMessage, setFormMessage] = useState(FormMessageInItState);

  const { password, password_confirmation } = useValidation();

  return (
    <React.Fragment>
      <Wrapper>
        <Helmet title={t("resetPassword")} />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BrandLogo src={CompanyLogo} />
        </Box>
        {formMessage.text ? (
          <FormAlert formMessage={formMessage} />
        ) : (
          <Typography component="h2" variant="body1" align="center">
            {t("enterYourEmailToResetPassword")}
          </Typography>
        )}

        <Formik
          initialValues={resetPasswordFormInitData}
          validationSchema={Yup.object().shape({
            password: password.required,
            password_confirmation: password_confirmation.required,
          })}
          onSubmit={handleResetPasswordFormSubmit(_user!, {
            navigate,
            setFormMessage,
          })}
        >
          {(props): React.ReactElement => (
            <ResetPasswordForm
              {...props}
              token={token}
              email={email}
              user={_user}
            />
          )}
        </Formik>
      </Wrapper>
    </React.Fragment>
  );
}

export default ResetPassword;
