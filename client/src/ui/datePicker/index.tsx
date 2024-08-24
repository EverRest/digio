import React, { ReactElement } from "react";
import { handleDatepicker } from "../../utils/form";
import { DatePicker } from "@mui/x-date-pickers";
import { useField, useFormikContext } from "formik";
import { TextField } from "@mui/material";
import { INPUT_MIN_HEIGHT } from "../../constants";
import { Props } from "./types";
/* istanbul ignore next */
export const MUIDatePicker = ({
  name,
  label,
  status,
  fullWidth = true,
  minHeight,
  sx = null,
  size = "medium",
  required = false,
  inputFormat = "dd/MM/yyyy",
  openTo = "year",
  views = ["year", "month", "day"],
  disabled = false,
  disableFuture = false,
  disablePast = false,
  dataTestId = "",
  minDate = undefined,
  value,
  shouldDisableDate = () => false,
  shouldDisableYear = () => false,
  shouldDisableMonth = () => false,
  onChangeValue,
  shrink = false,
  touchedValue = false,
  onClose,
  onOpen
}: Props): ReactElement => {
  const { setFieldValue, handleBlur } = useFormikContext();
  const [field, meta] = useField(name);
  return (
    <DatePicker
      openTo={openTo}
      views={views}
      inputFormat={inputFormat}
      value={value ? value : field.value}
      label={label}
      onChange={
        onChangeValue
          ? onChangeValue
          : handleDatepicker({ setFieldValue }, field.name)
      }
      disableFuture={disableFuture}
      disablePast={disablePast}
      shouldDisableDate={shouldDisableDate}
      shouldDisableMonth={shouldDisableMonth}
      shouldDisableYear={shouldDisableYear}
      minDate={minDate}
      disabled={disabled}
      onClose={onClose}
      onOpen={onOpen}
      renderInput={({ error, ...params }): ReactElement => (
        <TextField
          {...params}
          data-testid={dataTestId}
          name={field.name}
          type="date"
          required={required}
          fullWidth={fullWidth}
          sx={{ minHeight: minHeight || INPUT_MIN_HEIGHT, ...sx }}
          size={size}
          onBlur={handleBlur}
          InputLabelProps={{
            ...params.InputLabelProps,
            ...(shrink && {
              shrink: shrink,
            }),
          }}
          error={
            error
              ? true
              : Boolean(
                  (meta.touched || touchedValue) &&
                    (status?.errors?.[name] || meta.error)
                )
          }
          helperText={
            ((meta.touched || touchedValue) && meta.error) ||
            status?.errors?.[name]
          }
        />
      )}
    />
  );
};

export default MUIDatePicker;
