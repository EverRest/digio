import { FormikHelpers } from "formik";
import { updateClient } from "../../../api/clients";
import { Client } from "../../../types/be/client";
import { UpdateClient } from "../../../types/fe/client";
import { SubmitHandlerProps } from "./types";
import { mapBackendValidationErrors } from "../../../utils/form";
import {
  FormMessageInItState,
  SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";

export const handleSubmit = ({
  refresh,
  setFormMessage,
  handleCloseDialog,
  t,
  snackbar,
}: SubmitHandlerProps) => {
  return async (
    values: Client,
    { setSubmitting, setStatus }: FormikHelpers<Client>
  ): Promise<void> => {
    const payload: UpdateClient = {
      module_code: values.modules,
    };

    const response = await updateClient(values.id, payload);

    if (response.ok) {
      refresh();
      setStatus({
        success: true,
        errors: {},
      });
      setFormMessage(FormMessageInItState);
      handleCloseDialog();

      snackbar.success(t("client.moduleUpdated"));
    } else if (response.status === 422) {
      const error = await response?.json();
      setStatus({
        success: false,
        errors: mapBackendValidationErrors(error?.errors),
      });
      setSubmitting(false);
    } else {
      setFormMessage({ type: "error", text: SOMETHING_WENT_WRONG_ERROR });
      setSubmitting(false);

      snackbar.error(t(SOMETHING_WENT_WRONG_ERROR));
    }
  };
};
