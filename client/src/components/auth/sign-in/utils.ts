import { SignInForm, FormSubmitHandlerProps } from "./types";
import { FormikValues } from "formik/dist/types";
import { isAppEnv } from "../../../utils/env";
import { mapBackendValidationErrors } from "../../../utils/form";
import {
  APP_ENVIRONMENTS,
  SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";
import { HTTP_STATUS_CODES } from "../../../types/server";

/* istanbul ignore next */
export const signInFormInitData: SignInForm = {
  email: isAppEnv(APP_ENVIRONMENTS.LOCAL) ? "admin@mail.com" : "",
  password: isAppEnv(APP_ENVIRONMENTS.LOCAL) ? "+Ubw8NKH" : "",
  rememberMe: false,
  submit: false,
};

export const handleSignInFormSubmit = ({
  signIn,
  setFormMessage,
}: FormSubmitHandlerProps) => {
  return async (
    values: SignInForm,
    { setStatus, setSubmitting }: FormikValues
  ): Promise<void> => {
    try {
      await signIn(values.email, values.password);
    } catch (error: any) {
      const result = JSON.parse(error?.message);
      if (HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY === result?.status) {
        const message = result.message;
        setFormMessage({
          type: "error",
          text: message,
        });
        setStatus({
          success: false,
          errors: mapBackendValidationErrors(message),
        });
      } else {
        setFormMessage({
          type: "error",
          text: SOMETHING_WENT_WRONG_ERROR,
        });
      }
      setSubmitting(false);
    }
  };
};
