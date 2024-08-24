import { FormikProps } from "formik";
import { Client } from "../../../types/be/client";
import { Module } from "../../../types/be/module";
import { Dispatch, SetStateAction } from "react";
import { FormMessageInterface } from "../../../types/form";
import { TFunction } from "i18next";
import { Snackbar } from "../../../ui/snackbar1/useSnackbar";

export interface ClientModuleProps {
  handleCloseDialog: () => void;
  clientInfo: Client;
  fetchClientsList: () => Promise<void>;
  snackbar: Snackbar;
}

export interface FormProps extends FormikProps<Client> {
  modules: Module[];
}

export interface SubmitHandlerProps {
  refresh: () => Promise<void>;
  setFormMessage: Dispatch<SetStateAction<FormMessageInterface>>;
  handleCloseDialog: () => void;
  t: TFunction<"translation", undefined, "translation">;
  snackbar: Snackbar;
}
