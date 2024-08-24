import React, { ReactElement } from "react";
import { FormProps } from "./types";
import { Form } from "formik";
import { Grid, Card, CardContent, CardActions } from "@mui/material";
import { useTranslation } from "react-i18next";
import Text from "../../../ui/formsFields/text";
import Button from "../../../ui/button/Button";

const AddOrUpdateForm = ({
                             status,
                             values,
                             handleSubmit,
                             isSubmitting,
                         }: FormProps): ReactElement => {
    const { t } = useTranslation();

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Card>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="accountName"
                                label={t("form.name")}
                                status={status}
                                required
                                value={values.accountName ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="description"
                                label={t("form.description")}
                                status={status}
                                required
                                value={values.description ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="accountType"
                                label={t("form.type")}
                                status={status}
                                required
                                value={values.accountType ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="link"
                                label={t("form.link")}
                                status={status}
                                required
                                value={values.link ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="email"
                                label={t("form.email")}
                                status={status}
                                type="email"
                                required
                                value={values.email ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="password"
                                label={t("form.password")}
                                status={status}
                                type="password"
                                required
                                value={values.password ?? ""}
                            />
                        </Grid>
                    </Grid>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end", padding: 2 }}>
                    <Button
                        title={t("save")}
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        color="success"
                        testId="dataItems-save-contact-select"
                    />
                </CardActions>
            </Card>
        </Form>
    );
};

export default AddOrUpdateForm;