import React, { ChangeEvent, ReactElement, useCallback } from "react";
import { Checkbox, Grid } from "@mui/material";

import Button from "../../../ui/button/Button";
import { FormProps } from "./types";
import { Module } from "../../../types/be/module";
import { CheckboxContainer } from "./style";
import { useTranslation } from "react-i18next";

const Form = ({
  handleSubmit,
  isSubmitting,
  values,
  setFieldValue,
  modules,
}: FormProps): ReactElement => {
  const { t } = useTranslation();

  const handleChangeCheckbox = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const isChecked = e.target.checked;
      const value = e.target.value;

      let oldValues = [...values.modules];
      if (isChecked) {
        oldValues.push(value);
      } else {
        oldValues = oldValues.filter((item) => item !== value);
      }

      setFieldValue("modules", oldValues);
    },
    [values]
  );

  return (
    <form onSubmit={handleSubmit}>
      <CheckboxContainer>
        {modules.map((module: Module) => {
          return (
            <li key={module.id}>
              <Checkbox
                value={module.code}
                color="primary"
                checked={values.modules.includes(module.code)}
                onChange={handleChangeCheckbox}
                id={module.code}
              />
              <label htmlFor={module.code}>{module.name}</label>
            </li>
          );
        })}
      </CheckboxContainer>

      <Grid
        container
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={3}
      >
        <Grid item>
          <Button
            testId="client-module-submit"
            title={t("save")}
            color="success"
            type="submit"
            disabled={isSubmitting}
            isLoading={isSubmitting}
            sx={{ cursor: "pointer" }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default Form;
