import React, { ReactElement } from "react";
import { ToggleButtonGroup, ToggleButton, FormHelperText } from "@mui/material";
import { FormikValues } from "formik";

type Props = FormikValues & {
  options: { name: string; value: boolean }[];
};
/* istanbul ignore next */
export default ({
  value,
  options,
  onChange,
  error,
  helperText,
}: Props): ReactElement => {
  return (
    <>
      <ToggleButtonGroup
        color="primary"
        value={value}
        exclusive
        onChange={onChange}
      >
        {options.map((option, index) => (
          <ToggleButton
            key={index}
            sx={{ height: "38px", border: error ? "1px solid #f44336" : "" }}
            value={option.value}
          >
            {option.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <FormHelperText sx={{ width: 200 }} error>
        {error && helperText}
      </FormHelperText>
    </>
  );
};
