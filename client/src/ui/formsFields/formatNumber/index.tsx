import {
  DECIMAL_SCALE,
  DECIMAL_SEPARATOR,
  Measurement_Units,
  THOUSAND_SEPARATOR,
} from "../../../constants";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import React, { ReactElement, useState } from "react";
import { NumericFormat } from "react-number-format";
import { useField } from "formik";

type Props = TextFieldProps & {
  status?: { errors?: Record<string, string> };
  allowNegative?: boolean;
};
/* istanbul ignore next */
export const FormatNumber = ({
  name,
  status,
  allowNegative = false,
  ...otherProps
}: Props): ReactElement => {
  const [field, meta] = useField(String(name));
  const [inputValue, setInputValue] = useState(otherProps.value ?? "");

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
    <NumericFormat
      thousandSeparator={THOUSAND_SEPARATOR}
      decimalSeparator={DECIMAL_SEPARATOR}
      decimalScale={DECIMAL_SCALE}
      fixedDecimalScale={
        configTextField.inputProps.unit === Measurement_Units.EURO
      }
      customInput={MUITextField}
      value={inputValue}
      onValueChange={({ value }) => {
        setInputValue(value);
      }}
      allowNegative={allowNegative}
      suffix={
        configTextField?.inputProps?.suffix &&
        ` ${configTextField.inputProps.suffix}`
      }
      {...configTextField}
    />
  );
};
