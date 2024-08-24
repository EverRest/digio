import React from "react";
import { FormMessageInterface } from "../../../types/form";

export interface SignInForm {
  email: string;
  password: string;
  rememberMe?: boolean;
  submit?: boolean;
}

export type FormSubmitHandlerProps = {
  signIn: (email: string, password: string) => Promise<void>;
  setFormMessage: React.Dispatch<React.SetStateAction<FormMessageInterface>>;
};
