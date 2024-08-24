import { Checkbox } from "@mui/material";
import React, { ChangeEvent, ReactElement, useState } from "react";
import { CheckboxWrapperProps } from "./types";
/* istanbul ignore next */
const CheckboxWrapper = ({
  defaultValue = false,
  id,
  name,
  onChange,
}: CheckboxWrapperProps): ReactElement => {
  const [isChecked, setIsChecked] = useState<boolean>(defaultValue);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { checked, id } = e.target;
    setIsChecked(checked);
    onChange(Number(id), checked);
  };

  return (
    <Checkbox
      name={name}
      checked={isChecked}
      onChange={handleCheckboxChange}
      id={String(id)}
    />
  );
};

export default CheckboxWrapper;
