import React, {ReactElement} from "react";
import {FormProps} from "./types";
import {Form} from "formik";
import {Grid} from "@mui/material";
import {useTranslation} from "react-i18next";
import Text from "../../../ui/formsFields/text";
import Button from "../../../ui/button/Button";

const AddOrUpdateForm = ({
                             status,
                             values,
                             handleSubmit,
                             isSubmitting,
                         }: FormProps): ReactElement => {
    const {t} = useTranslation();

    return (
        <Form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={6}>
                <Grid item xs={12} md={6}>
                    <Text
                        name="email"
                        label={t("form.email")}
                        status={status}
                        required
                        value={values.email ?? ""}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Text
                        name="mood"
                        label={t("form.mood")}
                        status={status}
                        required
                        value={values.mood ?? ""}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Text
                        name="username"
                        label={t("form.userName")}
                        status={status}
                        required
                        value={values.username ?? ""}
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
                        name="role"
                        label={t("form.role")}
                        status={status}
                        required
                        value={values.role ?? ""}
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
                <Grid container justifyContent="flex-end" sx={{mt: 6}}>
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