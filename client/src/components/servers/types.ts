import React from "react";
import { FormMessageInterface } from "../../types/form";


export type FormSubmitHandlerProps = {
  setFormMessage: React.Dispatch<React.SetStateAction<FormMessageInterface>>;
};
