import { FormikProps } from "formik";
import { AreaIncomeRangePayload } from "../../../types/fe/areaIncomeRange";
import { NavigateFunction } from "react-router-dom";
import { Dispatch, SetStateAction } from "react";
import { FormMessageInterface } from "../../../types/form";
import { AreaIncomeRange } from "../../../types/be/areaIncomeRange";

export interface FormProps extends FormikProps<AreaIncomeRangePayload> {
  areaIncomeRange: AreaIncomeRange | null;
}

export interface SubmitHandlerProps {
  navigate: NavigateFunction;
  setFormMessage: Dispatch<SetStateAction<FormMessageInterface>>;
  id?: string;
}
