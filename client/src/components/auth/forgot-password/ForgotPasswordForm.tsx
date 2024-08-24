import React from "react";
import { TextField } from "./styled";
import Button from "../../../ui/button/Button";
import { useTranslation } from "react-i18next";
import { FormikFormProps } from "../../../types/form";

type ForgotPasswordForm = {
  email?: string | undefined;
};
const ForgotPasswordForm = ({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  isSubmitting,
  touched,
  values,
  status,
}: FormikFormProps<ForgotPasswordForm>): React.ReactElement => {
  const { t } = useTranslation();
  return (
    <form noValidate onSubmit={handleSubmit}>
      <TextField
        style={{ minHeight: "74px" }}
        type="email"
        name="email"
        label={t("emailAddress")}
        value={values.email}
        error={Boolean(touched.email && (status?.errors.email || errors.email))}
        fullWidth
        helperText={touched.email && (status?.errors.email || errors.email)}
        onBlur={handleBlur}
        onChange={handleChange}
        my={3}
      />
      <Button
        testId="submit-button"
        type="submit"
        isLoading={isSubmitting}
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
        title={t("sendLink")}
      />
    </form>
  );
};

export default ForgotPasswordForm;
