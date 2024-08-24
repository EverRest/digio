import { AlertColor } from "@mui/material";
import React, { FocusEvent } from "react";
import { FormikValues } from "formik/dist/types";

export interface FormMessageInterface {
  type: AlertColor | undefined;
  text: string;
}

export interface FormSubmitHandlerProps {
  setFormMessage: React.Dispatch<React.SetStateAction<FormMessageInterface>>;
  afterSubmit?: () => Promise<void> | void;
}

export interface StepperFormSubmitHandlerProps extends FormSubmitHandlerProps {
  handleNextStepClick: () => void;
}

export type FormProps = FormikValues & {
  handleNextStepClick?: () => void;
  handlePrevStepClick?: () => void;
};

export type FormikFormProps<T> = {
  errors: T;
  isSubmitting: boolean;
  values: T;
  touched: Record<string, boolean>;
  status?: {
    errors: T;
  };

  handleBlur: (e: FocusEvent<any, Element>) => void;
  handleChange: (e: FocusEvent<any, Element>) => void;
  handleSubmit: (e: FocusEvent<any, Element>) => void;
};

export interface StepperStepComponentProps {
  handlePrevStepClick: () => void | undefined;
  handleNextStepClick: () => void;
}
