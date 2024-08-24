import React, { useState } from "react";
import { Formik } from "formik";
import useAuth from "../../../hooks/useAuth";
import { SignInForm } from "./SignInForm";
import { Wrapper } from "../forgot-password/styled";
import { handleSignInFormSubmit, signInFormInitData } from "./utils";
import { Helmet } from "react-helmet-async";
import AlertCustom from "../../../ui/formAlert/FormAlert";
import { Box } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FormMessageInItState } from "../../../constants";
import useValidation from "../../../hooks/useValidation";
import * as Yup from "yup";
import { BrandLogo, ErrorContainer } from "./styled";
import CompanyLogo from "../../../vendor/logo/image3.png";

function SignIn(): React.ReactElement {
  const { signIn } = useAuth();
  const { t } = useTranslation();
  const [formMessage, setFormMessage] = useState(FormMessageInItState);

  const { email, password } = useValidation();

  return (
    <React.Fragment>
      <Wrapper>
        <Helmet title={t("signIn")} />
        <Box
          sx={{
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <BrandLogo src={CompanyLogo} />
        </Box>
        {formMessage.text && (
          <ErrorContainer>
            <AlertCustom formMessage={formMessage} />
          </ErrorContainer>
        )}
        <Formik
          initialValues={signInFormInitData}
          validationSchema={Yup.object().shape({
            email,
            password: password.required,
          })}
          onSubmit={handleSignInFormSubmit({
            signIn,
            setFormMessage,
          })}
        >
          {(props): React.ReactElement => <SignInForm {...props} />}
        </Formik>
      </Wrapper>
    </React.Fragment>
  );
}

export default SignIn;
