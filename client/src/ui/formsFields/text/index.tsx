import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import React, { ReactElement } from "react";
import { useField } from "formik";

type Props = TextFieldProps & {
  status?: { errors?: Record<string, string> };
};
/* istanbul ignore next */
export const Text = ({
  name,
  status,
  children,
  ...otherProps
}: Props): ReactElement => {
  const [field, meta] = useField(String(name));

  const configTextField: any = {
    ...field,
    fullWidth: true,
    variant: "outlined",
    ...otherProps,
  };

  if (meta && meta.touched && (meta.error || status?.errors?.[String(name)])) {
    configTextField.error = true;
    configTextField.helperText = meta.error || status?.errors?.[String(name)];
  }
  return (
    <MUITextField mb={1} {...configTextField}>
      {children}
    </MUITextField>
  );
};

export default Text;
