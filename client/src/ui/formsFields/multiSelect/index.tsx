import React, { ReactElement } from "react";
import { InputLabel, OutlinedInput } from "@mui/material";
import { FormikValues, useFormikContext } from "formik";
import { FormControl, FormHelperText, Select } from "./styled";
import { handleMultiSelector } from "../../../utils/form";
import { ConfigMultiSelectProps, MultiSelectProps } from "./types";
import { useField } from "formik";
/* istanbul ignore next */
const MultiSelect = <T,>({
  name,
  label,
  status,
  size = "medium" as "medium" | "small",
  minHeight,
  children,
  onChange,
  showLabel = true,
  ...props
}: FormikValues & MultiSelectProps): ReactElement => {
  const [field, meta] = useField(String(name));
  const { setFieldValue } = useFormikContext();

  const configMultiSelect: ConfigMultiSelectProps<T> = {
    ...field,
    ...props,
  };

  if (meta && meta.touched && (meta.error || status?.errors?.[String(name)])) {
    configMultiSelect.error = true;
    configMultiSelect.helper = meta.error || status?.errors?.[String(name)];
  }

  return (
    <FormControl size={size} sx={{ minHeight }}>
      <InputLabel id={`${name}-label`}>{label}</InputLabel>
      <Select
        size={size}
        sx={{ minHeight }}
        labelId={`${name}-label`}
        id={name}
        multiple
        input={
          <OutlinedInput
            id="select-multiple-chip"
            label={showLabel ? name : ""}
          />
        }
        {...configMultiSelect}
        onChange={onChange ?? handleMultiSelector({ setFieldValue }, name)}
      >
        {children}
      </Select>
      {configMultiSelect.error && (
        <FormHelperText>{configMultiSelect.helper}</FormHelperText>
      )}
    </FormControl>
  );
};

export default MultiSelect;
