import React, { useEffect } from "react";
import Button from "../../../ui/button/Button";
import { useTranslation } from "react-i18next";
import { Text as TextField } from "../../../ui/formsFields/text";
import { FormikValues } from "formik/dist/types";
import { useNavigate } from "react-router-dom";
import { route } from "../../../utils/url";

function ResetPasswordForm({
  handleSubmit,
  isSubmitting,
  token,
  email,
  setFieldValue,
  user,
}: FormikValues): React.ReactElement {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    token && setFieldValue("token", token);
    email && setFieldValue("email", email);
    !user?.is_new_password && (!token || !email) && navigate(route("sign-in"));
  }, [token, email]);

  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        type="password"
        name="password"
        style={{ minHeight: "74px" }}
        label={t("newPassword")}
        fullWidth
        inputProps={{ "data-testid": "password" }}
      />
      <TextField
        type="password"
        name="password_confirmation"
        style={{ minHeight: "74px" }}
        label={t("passwordConfirmation")}
        fullWidth
        inputProps={{ "data-testid": "passwordConfirmation" }}
      />
      <Button
        data-testid="submit-button"
        type="submit"
        isLoading={isSubmitting}
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        title={t("resetPassword")}
      />
    </form>
  );
}

export default ResetPasswordForm;
