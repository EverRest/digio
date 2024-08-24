import React from "react";
import { Checkbox as MUICheckbox } from "@mui/material";
import { useField } from "formik";
import { Props } from "./types";
/* istanbul ignore next */
const Checkbox = ({ name, ...otherProps }: Props): React.ReactElement => {
  const [field] = useField(name!);

  const configTextField = {
    ...field,
    ...otherProps,
  };

  return <MUICheckbox checked={field.value} {...configTextField} />;
};

export default Checkbox;
