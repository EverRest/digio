import React from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  StandardTextFieldProps,
} from "@mui/material";
import { Android12Switch } from "./styled";
import { useField, useFormikContext } from "formik";

type Props = StandardTextFieldProps & {
  name: string;
  label?: string;
  checked: boolean;
};
/* istanbul ignore next */
const SwitchWrapper = ({
  name,
  label,
  ...otherProps
}: Props): React.ReactElement => {
  const [field] = useField(name!);
  const { setFieldValue } = useFormikContext();
  /* istanbul ignore next */
  const handleChange = (event: { target: { checked: boolean } }): void => {
    const { checked } = event.target;
    setFieldValue(name!, checked);
  };

  const configSwitch: any = {
    ...field,
    onChange: handleChange,
    ...otherProps,
  };

  return (
    <FormControl>
      <FormGroup>
        <FormControlLabel
          control={<Android12Switch {...configSwitch} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};
export default SwitchWrapper;
