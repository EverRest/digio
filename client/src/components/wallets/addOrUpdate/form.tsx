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
                                name="address"
                                label={t("form.address")}
                                status={status}
                                required
                                value={values.address ?? ""}
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
                                name="name"
                                label={t("form.fullName")}
                                status={status}
                                required
                                value={values.name ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="walletName"
                                label={t("form.walletName")}
                                status={status}
                                required
                                value={values.walletName ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="walletType"
                                label={t("form.type")}
                                status={status}
                                required
                                value={values.walletType ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="password"
                                label={t("form.password")}
                                status={status}
                                value={values.password ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="token"
                                label={t("form.token")}
                                status={status}
                                value={values.token ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="apiKey"
                                label={t("form.apiKey")}
                                status={status}
                                value={values.apiKey ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="publicKey"
                                label={t("form.publicKey")}
                                status={status}
                                value={values.publicKey ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="privateKey"
                                label={t("form.privateKey")}
                                status={status}
                                value={values.privateKey ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="secret"
                                label={t("form.secret")}
                                status={status}
                                value={values.secret ?? ""}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Text
                                name="phrase"
                                label={t("form.phrase")}
                                status={status}
                                value={values.phrase ?? ""}
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