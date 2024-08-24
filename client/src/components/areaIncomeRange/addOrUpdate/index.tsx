import React, { ReactElement, useEffect, useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Form from "./form";
import { AreaIncomeRangePayload } from "../../../types/fe/areaIncomeRange";
import { Grid, Paper } from "@mui/material";
import PageWrapper from "../../../ui/pageWrapper/PageWrapper";
import { useTranslation } from "react-i18next";
import { handleSubmit } from "./utilts";
import { FormMessageInItState } from "../../../constants";
import { useNavigate, useParams } from "react-router-dom";
import FormAlert from "../../../ui/formAlert/FormAlert";
import { getAreaIncomeRange } from "../../../api/areaIncomeRange";
import { AreaIncomeRange } from "../../../types/be/areaIncomeRange";
import { route } from "../../../utils/url";
import useValidation from "../../../hooks/useValidation";

const initValues: AreaIncomeRangePayload = {
  tenant_id: "",
  type_id: "",
  count: "",
  price: "",
};

const CreateOrEditAreaIncomeRange = (): ReactElement => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const { areaIncomeRange: areaIncomeRangeValidation } = useValidation();
  const [formMessage, setFormMessage] = useState(FormMessageInItState);
  const [initialValues, setInitialValues] =
    useState<AreaIncomeRangePayload>(initValues);
  const [areaIncomeRange, setAreaIncomeRange] =
    useState<AreaIncomeRange | null>(null);

  const getAreaInfo = async (): Promise<void> => {
    if (id) {
      const response = await getAreaIncomeRange(id);
      if (response.ok) {
        const json = await response.json();
        const preparedInitialValues: AreaIncomeRangePayload = {
          count: json.data.count,
          price: json.data.price,
          tenant_id: json.data.tenant.id,
          type_id: json.data.type.id,
        };

        setAreaIncomeRange(json.data);
        setInitialValues(preparedInitialValues);
      }
    }
  };

  useEffect(() => {
    getAreaInfo();
  }, [id]);

  const breadcrumbs = [
    {
      to: route("areaIncomeRange"),
      name: t("areaIncomeRange.title"),
    },
  ];

  return (
    <PageWrapper
      title={id ? id : t("areaIncomeRange.add")}
      breadcrumbs={breadcrumbs}
    >
      <Grid container justifyContent="center" alignItems="stretch" spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 5 }}>
            {formMessage.text && (
              <FormAlert formMessage={formMessage} sx={{ mb: 4 }} />
            )}
            <Formik
              enableReinitialize
              initialValues={initialValues}
              validationSchema={Yup.object().shape({
                ...areaIncomeRangeValidation,
              })}
              onSubmit={handleSubmit({ setFormMessage, navigate, id })}
            >
              {(props) => <Form {...props} areaIncomeRange={areaIncomeRange} />}
            </Formik>
          </Paper>
        </Grid>
      </Grid>
    </PageWrapper>
  );
};

export default CreateOrEditAreaIncomeRange;
