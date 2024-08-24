import React, { useCallback, useEffect, useState } from "react";
import { Grid, Stack, Tooltip } from "@mui/material";
import { ReactElement } from "react";
import { FormikValues } from "formik/dist/types";
import { useTranslation } from "react-i18next";

import { INPUT_MIN_HEIGHT } from "../../../constants";
import TextField from "./../../../ui/formsFields/text";
import Button from "../../../ui/button/Button";
import Snackbar from "../../../ui/Snackbar";
import { Module } from "../../../types/be/module";
import useIsMounted from "../../../hooks/useIsMounted";
import MultiSelectDropdown from "../../../ui/multiselectDropdown/MultiSelectDropdown";
import { getModules } from "../../../api/clients";
import { Options } from "./types";

const Form = ({
  handleSubmit,
  isSubmitting,
  values,
  status,
  setFieldValue,
}: FormikValues): ReactElement => {
  const { t } = useTranslation();

  const [isSnackbarVisible, setIsSnackbarVisible] = useState(false);
  const [companyWasCreated, setCompanyWasCreated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modules, setModules] = useState<Options[]>([]);

  const handleClose = (): void => {
    setIsSnackbarVisible(false);
    setCompanyWasCreated(false);
  };

  useEffect(() => {
    setIsSnackbarVisible(status?.success);
    setCompanyWasCreated(companyWasCreated);
  }, [status, setCompanyWasCreated]);

  const fetchModules = useCallback(async () => {
    setIsLoading(true);

    const response = await getModules();

    if (response.status) {
      const resJson = await response.json();
      setModules(
        resJson.data?.map((v: Module) => ({ label: v.name, value: v.code }))
      );
      setIsLoading(false);
    }
  }, []);

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted()) fetchModules();
  }, []);

  return (
    <>
      <form noValidate onSubmit={handleSubmit}>
        <Grid container spacing={6} columns={12}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="name"
              label={t("client.name")}
              value={values.name}
              sx={{ minHeight: INPUT_MIN_HEIGHT }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="code"
              label={t("client.code")}
              value={values.code}
              sx={{ minHeight: INPUT_MIN_HEIGHT }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              name="domain"
              label={t("client.domain")}
              value={values.domain}
              sx={{ minHeight: INPUT_MIN_HEIGHT }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Tooltip placement="top" title={t(`client.module_code`)}>
              <>
                <MultiSelectDropdown
                  label={t(`client.module_code`)}
                  placeholder={t(`client.more`)}
                  options={modules}
                  name="module_code"
                  setFieldValue={setFieldValue}
                  isLoading={isLoading}
                />
              </>
            </Tooltip>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={0}
            >
              <Button
                color="success"
                testId="create-user-submit"
                title={t("client.createClient")}
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
              />
            </Stack>
            <Snackbar
              message={t("clients.clientWasSuccessfullyCreated")}
              open={isSnackbarVisible}
              handleClose={handleClose}
            />
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Form;
