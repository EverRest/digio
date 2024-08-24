import { ForgotPasswordForm } from "./types";
import { FormikValues } from "formik/dist/types";
import { FormSubmitHandlerProps } from "../../../types/form";
import {
  RESET_PASSWORD_EMAIL_WAS_SEND,
  SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import { forgotPassword } from "../../../api/users";
import { mapBackendValidationErrors } from "../../../utils/form";
import { HTTP_STATUS_CODES } from "../../../types/server";

export const forgotPasswordFormInitData: ForgotPasswordForm = {
  email: "",
};

export const handleForgotPasswordFormSubmit = ({
  setFormMessage,
}: FormSubmitHandlerProps) => {
  return async (
    values: ForgotPasswordForm,
    { setStatus, setSubmitting, resetForm }: FormikValues
  ): Promise<void> => {
    const response = await forgotPassword(values);
    const json = await response.json();
    if (response.status === HTTP_STATUS_CODES.OK) {
      setStatus({
        success: true,
        errors: {},
      });
      setFormMessage({
        type: "success",
        text: "weSentTheResetPasswordLinkOnYourEmail",
      });
      resetForm(forgotPasswordFormInitData);
    } else if (response.status === HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY) {
      setStatus({
        success: false,
        errors: mapBackendValidationErrors(json.errors),
      });
      setSubmitting(false);
    } else if (response.status === HTTP_STATUS_CODES.TOO_MANY_REQUESTS) {
      setFormMessage({ type: "warning", text: RESET_PASSWORD_EMAIL_WAS_SEND });
      setSubmitting(false);
    } else {
      setFormMessage({ type: "error", text: SOMETHING_WENT_WRONG_ERROR });
      setSubmitting(false);
    }
  };
};
