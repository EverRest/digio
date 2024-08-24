import React, { ReactElement, useEffect, useState } from "react";
import { useField, useFormikContext } from "formik";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { FORBIDDEN_CHARACTERS_IN_NUMBERS } from "../../../constants";

type Props = TextFieldProps & {
  status?: { errors?: Record<string, string> };
};
/* istanbul ignore next */
const Number = ({
  name,
  status,
  children,
  onChange,
  ...otherProps
}: Props): ReactElement => {
  const [field, meta] = useField(String(name));
  const [inputValue, setInputValue] = useState(otherProps.value ?? "");
  const { setFieldValue } = useFormikContext();

  const configTextField: any = {
    ...field,
    fullWidth: true,
    variant: "outlined",
    ...otherProps,
  };

  useEffect(() => {
    setInputValue(`${otherProps.value}`);
  }, [otherProps.value]);

  function handleOnChange(e: any): void {
    const { value } = e.target;
    value >= 0 && setInputValue(`${value}`);
    value >= 0 && setFieldValue(String(name), value);
    onChange && onChange(e);
  }

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLDivElement>): void => {
    FORBIDDEN_CHARACTERS_IN_NUMBERS.includes(e.key) && e.preventDefault();
  };

  if (meta && meta.touched && (meta.error || status?.errors?.[String(name)])) {
    configTextField.error = true;
    configTextField.helperText = meta.error || status?.errors?.[String(name)];
  }

  return (
    <MUITextField
      mb={1}
      {...configTextField}
      value={inputValue}
      onChange={(e) => handleOnChange(e)}
      onKeyDown={(e) => handleOnKeyDown(e)}
    >
      {children}
    </MUITextField>
  );
};

export default Number;
