import React, { ReactElement } from "react";
import { DatePicker as MUIDatePicker } from "@mui/x-date-pickers";
import { FormikValues } from "formik/dist/types";
import { useField, useFormikContext } from "formik";
import { TextField, TextFieldProps } from "@mui/material";

type Props = TextFieldProps & {
  status?: { errors?: Record<string, string> };
};
/* istanbul ignore next */
const DatePicker = ({ name, status, ...otherProps }: Props): ReactElement => {
  const [field, meta] = useField(String(name));
  const { setFieldValue } = useFormikContext();
  const handleDatepicker = ({ setFieldValue }: FormikValues, field: string) => {
    return (date: Date | null): void => {
      setFieldValue(field, date);
    };
  };

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

  if (meta && meta.touched && (meta.error || status?.errors?.[String(name)])) {
    configTextField.error = true;
    configTextField.helperText = meta.error || status?.errors?.[String(name)];
  }

  return (
    <MUIDatePicker
      disableFuture
      openTo="year"
      views={["year", "month", "day"]}
      inputFormat="dd/MM/yyyy"
      value={field.value || null}
      onChange={handleDatepicker({ setFieldValue }, field.name)}
      renderInput={(params): ReactElement => {
        return (
          <TextField
            {...params}
            error={false}
            id={field.name}
            type="date"
            value={field.value}
            label="Error"
            defaultValue="Hello World"
          />
        );
      }}
    />
  );
};

export default DatePicker;
