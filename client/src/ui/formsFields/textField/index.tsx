import React, { ReactElement, useState } from "react";
import { TextField as MUITextField, TextFieldProps } from "@mui/material";
import { useField, useFormikContext } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import { handleDatepicker } from "../../../utils/form";
import { NumericFormat } from "react-number-format";
import {
  INPUT_MIN_HEIGHT,
  THOUSAND_SEPARATOR,
  DECIMAL_SEPARATOR,
  DECIMAL_SCALE,
  Measurement_Units,
  FORBIDDEN_CHARACTERS_IN_NUMBERS,
  INPUT_MIN_WIDTH,
} from "../../../constants";

type Props = TextFieldProps & {
  status?: { errors?: Record<string, string> };
  minHeight?: string;
  allowNegative?: boolean;
};

/***************DEPRECATED***************
 *        Don't use this component      *
 ****************************************/
/* istanbul ignore next */
const TextField = ({
  name,
  status,
  minHeight,
  children,
  label = null,
  allowNegative = false,
  ...otherProps
}: Props): React.ReactElement => {
  const [field, meta] = useField(String(name));
  const [inputValue, setInputValue] = useState(otherProps.value ?? "");
  const { setFieldValue } = useFormikContext();

  const configTextField: any = {
    ...field,
    fullWidth: true,
    label,
    variant: "outlined",
    ...otherProps,
  };
  /* istanbul ignore next */
  function handleOnChange(e: any): void {
    const { value } = e.target;
    value >= 0 && setInputValue(`${value}`);
    value >= 0 && setFieldValue(String(name), value);
  }

  const handleOnKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    allowNegative = false
  ): void => {
    FORBIDDEN_CHARACTERS_IN_NUMBERS.filter((char) =>
      allowNegative ? char !== "-" : true
    ).includes(e.key) && e.preventDefault();
  };

  if (meta && meta.touched && (meta.error || status?.errors?.[String(name)])) {
    configTextField.error = true;
    configTextField.helperText = meta.error || status?.errors?.[String(name)];
  }

  const renderResult = (type: string | undefined): ReactElement => {
    switch (type) {
      case "date":
        return (
          <DatePicker
            disableFuture
            openTo="year"
            views={["year", "month", "day"]}
            inputFormat="dd/MM/yyyy"
            value={field.value || null}
            label={label}
            onChange={handleDatepicker({ setFieldValue }, field.name)}
            renderInput={(params): ReactElement => {
              return (
                <TextField
                  {...params}
                  id={field.name}
                  type="date"
                  value={field.value}
                  error={false}
                  fullWidth
                />
              );
            }}
          />
        );
      case "number":
        return (
          <MUITextField
            style={{ minHeight: minHeight || INPUT_MIN_HEIGHT }}
            mb={1}
            {...configTextField}
            value={inputValue}
            onChange={/* istanbul ignore next */ (e) => handleOnChange(e)}
            onKeyDown={/* istanbul ignore next */ (e) => handleOnKeyDown(e)}
          >
            {children}
          </MUITextField>
        );
      case "formatNum":
        return (
          <NumericFormat
            sx={{
              minHeight: minHeight || INPUT_MIN_HEIGHT,
              minWidth: INPUT_MIN_WIDTH,
            }}
            thousandSeparator={THOUSAND_SEPARATOR}
            decimalSeparator={DECIMAL_SEPARATOR}
            decimalScale={DECIMAL_SCALE}
            fixedDecimalScale={
              configTextField.inputProps.unit === Measurement_Units.EURO
            }
            customInput={MUITextField}
            onValueChange={({ value }) => {
              setInputValue(value);
            }}
            allowNegative={allowNegative}
            value={inputValue}
            {...configTextField}
          />
        );
      default:
        return (
          <MUITextField
            sx={{ minHeight: minHeight || INPUT_MIN_HEIGHT }}
            mb={1}
            {...configTextField}
          >
            {children}
          </MUITextField>
        );
    }
  };
  if (configTextField.inputProps?.filter) {
    return renderResult(configTextField.inputProps?.filter);
  }
  return renderResult(configTextField.inputProps?.type);
};

export default TextField;
