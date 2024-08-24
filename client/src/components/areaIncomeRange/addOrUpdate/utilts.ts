import { FormikHelpers } from "formik";
import { createOrUpdateAreaIncomeRange } from "../../../api/areaIncomeRange";
import { AreaIncomeRangePayload } from "../../../types/fe/areaIncomeRange";
import { HTTP_STATUS_CODES } from "../../../types/server";
import { route } from "../../../utils/url";
import { SubmitHandlerProps } from "./types";
import { mapBackendValidationErrors } from "../../../utils/form";
import {
  FormMessageInItState,
  SOMETHING_WENT_WRONG_ERROR,
} from "../../../constants";

export const handleSubmit = ({
  navigate,
  setFormMessage,
  id,
}: SubmitHandlerProps) => {
  return async (
    values: AreaIncomeRangePayload,
    { setStatus }: FormikHelpers<AreaIncomeRangePayload>
  ): Promise<void> => {
    const response = await createOrUpdateAreaIncomeRange(values, id);

    if (response.ok) {
      setFormMessage(FormMessageInItState);
      setStatus({
        success: true,
        errors: {},
      });
      navigate(route("areaIncomeRange"));
    } else if (response.status === HTTP_STATUS_CODES.UNPROCESSABLE_ENTITY) {
      const errors = await response.json();
      setStatus({
        success: false,
        errors: mapBackendValidationErrors(errors),
      });
    } else {
      setFormMessage({ text: SOMETHING_WENT_WRONG_ERROR, type: "error" });
    }
  };
};
