import { Dispatch, SetStateAction } from "react";
import { FormMessageInterface } from "../../../types/form";

export interface ResetPasswordForm {
  password: string;
  password_confirmation: string;
}

export interface HandleResetPasswordFormSubmitProps {
  navigate: (url: string) => void;
  setFormMessage: Dispatch<SetStateAction<FormMessageInterface>>;
}
