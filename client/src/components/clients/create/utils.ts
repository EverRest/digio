import { NavigateFunction } from "react-router-dom";
import { CreateClientFormInitState } from "./types";
import { FormikValues } from "formik";
import { postClient } from "../../../api/clients";
import { route } from "../../../utils/url";
import { mapBackendValidationErrors } from "../../../utils/form";

export const createClientFormInitState: CreateClientFormInitState = {
  name: "",
  code: "",
  domain: "",
  module_code: [],
};
export const touchedInitState = {
  name: false,
  code: false,
  domain: false,
  module_code: false,
};

interface FormSubmitHandlerProps {
  navigate: NavigateFunction;
}
export const handleCreateClientFormSubmit = ({
  navigate,
}: FormSubmitHandlerProps) => {
  return async (
    values: CreateClientFormInitState,
    { setStatus, setSubmitting, setValues, setTouched }: FormikValues
  ): Promise<void> => {
    const response = await postClient(values);
    const json = await response.json();

    if (response.status === 201) {
      setStatus({ success: true, error: {} });
      setValues(createClientFormInitState);
      setTouched(touchedInitState);
      navigate(route("clients"));
    } else if (response.status === 422) {
      setStatus({
        success: false,
        error: mapBackendValidationErrors(json.errors),
      });
      setSubmitting(false);
    } else {
      setSubmitting(false);
    }
  };
};
