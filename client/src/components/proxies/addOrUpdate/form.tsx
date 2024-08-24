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
                                name="name"
                                label={t("form.name")}
                                status={status}
                                required
                                value={values.name ?? ""}
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
                                name="projectType"
                                label={t("form.type")}
                                status={status}
                                required
                                value={values.projectType ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="url"
                                label={t("form.link")}
                                status={status}
                                required
                                value={values.url ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="tags"
                                label={t("form.tags")}
                                status={status}
                                value={values.tags?.join(", ") ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="farmDescription"
                                label={t("form.farmDescription")}
                                status={status}
                                value={values.farmDescription}
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