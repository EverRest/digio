import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { FormProps } from "./types";
import Dropdown from "../../../ui/dropdown";
import { Form } from "formik";
import { Grid, MenuItem } from "@mui/material";
import { getClientsList } from "../../../api/clients";
import { useTranslation } from "react-i18next";
import Text from "../../../ui/formsFields/text";
import { AreaIncomeRangeType } from "../../../types/be/areaIncomeRange";
import { getAreaTypes } from "../../../api/areaIncomeRange";
import Button from "../../../ui/button/Button";
import { FormatNumber } from "../../../ui/formsFields/formatNumber";
import { Measurement_Units } from "../../../constants";
import { parseNumber } from "../../../utils/common";

const AddOrUpdateForm = ({
  setFieldValue,
  status,
  errors,
  touched,
  values,
  handleSubmit,
  isSubmitting,
  areaIncomeRange,
}: FormProps): ReactElement => {
  const { t } = useTranslation();
  const [areaTypes, setAreaTypes] = useState<AreaIncomeRangeType[]>([]);

  const fetchAreaTypes = useCallback(async () => {
    const response = await getAreaTypes();
    if (response.ok) {
      const json = await response.json();
      setAreaTypes(json);
    }
  }, []);

  useEffect(() => {
    fetchAreaTypes();
  }, []);

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Dropdown
            id="clients-autocomplete"
            name="tenant_id"
            placeholder={t("areaIncomeRange.client")}
            getOptions={getClientsList}
            enableReInitialization
            defaultValue={areaIncomeRange ? areaIncomeRange.tenant : undefined}
            onSelectOption={(id?: string) => {
              if (!id) return;

              setFieldValue("tenant_id", +id);
            }}
            size="medium"
            helperText={
              status?.errors.tenant_id ||
              (touched.tenant_id && errors.tenant_id)
            }
            error={Boolean(
              status?.errors.tenant_id ||
                (touched.tenant_id && errors.tenant_id)
            )}
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Text
            name="type_id"
            select
            label={t("areaIncomeRange.areaType")}
            status={status}
            required
            value={values.type_id ?? ""}
          >
            {areaTypes ? (
              areaTypes?.map((type) => (
                <MenuItem key={type._id} value={type._id}>
                  {type.name}
                </MenuItem>
              ))
            ) : (
              <div></div>
            )}
          </Text>
        </Grid>
        <Grid item xs={12} md={6}>
          <Text
            label={t("areaIncomeRange.count")}
            name="count"
            value={values.count}
            status={status}
            type="number"
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FormatNumber
            label={t("areaIncomeRange.price")}
            name="price"
            value={values.price}
            status={status}
            inputProps={{
              filter: "formatNum",
              unit: Measurement_Units.EURO,
            }}
            required
            onChange={(e) => {
              setFieldValue(
                "price",
                e.target.value.length
                  ? String(parseNumber(`${e.target.value}`, true))
                  : ""
              );
            }}
          />
        </Grid>
        <Grid container justifyContent="flex-end" sx={{ mt: 6 }}>
          <Button
            title={t("save")}
            disabled={isSubmitting}
            isLoading={isSubmitting}
            color="success"
            testId="dataItems-save-contact-select"
          />
        </Grid>
      </Grid>
    </Form>
  );
};

export default AddOrUpdateForm;
