  import React from "react";
import {
  Checkbox,
  FormControlLabel,
  Button as ForgotPasswordButton,
  Box,
} from "@mui/material";
import { TextField } from "./styled";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Button from "../../../ui/button/Button";
import { route } from "../../../utils/url";
import { FormikFormProps } from "../../../types/form";

type SignInFields = {
  email?: string;
  password?: string;
};
export const SignInForm = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  status,
}: FormikFormProps<SignInFields>): React.ReactElement => {
  const { t } = useTranslation();
  const rememberMe = t("rememberMe");

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <TextField
          data-testid="email-input"
          type="email"
          name="email"
          label={t("emailAddress")}
          value={values.email}
          fullWidth
          error={Boolean(
            touched.email && (status?.errors.email || errors.email)
          )}
          helperText={touched.email && (status?.errors.email || errors.email)}
          onBlur={handleBlur}
          onChange={handleChange}
          my={2}
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          data-testid="password-input"
          type="password"
          name="password"
          label={t("password")}
          value={values.password}
          fullWidth
          error={Boolean(
            touched.password && (status?.errors.password || errors.password)
          )}
          helperText={
            touched.password && (status?.errors.password || errors.password)
          }
          onBlur={handleBlur}
          onChange={handleChange}
          my={2}
          InputLabelProps={{ shrink: true }}
        />
        <FormControlLabel
          data-testid="remember-me-checkbox"
          control={<Checkbox value="remember" color="primary" />}
          label={rememberMe}
          sx={{ display: "none" }}
        />
        <Button
          data-testid="submit-button"
          type="submit"
          isLoading={isSubmitting}
          fullWidth
          variant="contained"
          color="primary"
          disabled={isSubmitting}
          title={t("signIn")}
        />
        <Box display="flex" justifyContent="center">
          <ForgotPasswordButton
            data-testid="forgot-password-link"
            component={NavLink}
            to={route("forgot-password")}
            color="primary"
          >
            {t("forgotPassword")}
          </ForgotPasswordButton>
        </Box>
      </form>
    </>
  );
};
