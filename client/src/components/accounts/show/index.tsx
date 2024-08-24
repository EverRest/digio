import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingBox } from "../../../ui/table/styled";
import { EMPTY_DATA, FormMessageErrorState } from "../../../constants";
import { ErrorBox } from "../../home/styled";
import { AccountShowType } from "../../../types/be/account";
import Loader from "../../Loader";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { SmallLightText, Wrapper } from "./styled";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/system";
import { getAccount } from "../../../api/accounts";
import Tags from "../../../components/tags/Tags";
import { getRandomColor } from "../../../utils/common";

const AccountShow = (): ReactElement => {
    const { t } = useTranslation();
    const [accountData, setAccountData] = useState<AccountShowType | null>(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [statusError] = useState(false);

    const { id } = useParams();

    const getData = async (): Promise<void> => {
        if (!id) return;
        const response = await getAccount(id);
        const data: AccountShowType = await response.json();
        setAccountData(data);
        setIsDataLoaded(true);
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (statusError) {
        return <ErrorBox formMessage={FormMessageErrorState} />;
    }

    if (!isDataLoaded && !accountData) {
        return (
            <div data-testid="loader">
                <LoadingBox>
                    <Loader />
                </LoadingBox>
            </div>
        );
    }

    return (
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Wrapper>
                <Grid item sm={12}>
                    <Card variant="outlined" sx={{ mb: 2 }}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item sm={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {accountData?.image ? (
                                        <Box
                                            component="img"
                                            src={`${process.env.REACT_APP_SERVER_URL}/storage/${accountData.image}`}
                                            sx={{
                                                width: '100%',
                                                height: 'auto',
                                                borderRadius: '50%',
                                                border: `5px solid ${getRandomColor()}`,
                                            }}
                                        />
                                    ) : (
                                        EMPTY_DATA
                                    )}
                                </Grid>
                                <Grid item sm={12} md={8}>
                                    <Grid container spacing={1}>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.link")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {accountData?.link ? accountData?.link : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.name")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h4">
                                                {accountData?.accountName ? accountData?.accountName : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.type")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h4">
                                                {accountData?.accountType ? accountData?.accountType : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.description")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {accountData?.description ? accountData?.description : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.encryptedCredentials")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            {accountData?.encryptedCredentials ? (
                                                Object.entries(accountData.encryptedCredentials).map(([key, value]) => (
                                                    <Typography key={key} variant="h6">
                                                        {`${key}: `}<code>{value}</code>
                                                    </Typography>
                                                ))
                                            ) : (
                                                EMPTY_DATA
                                            )}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {accountData?.tags ? (
                                                <Tags tags={accountData.tags} />
                                            ) : (
                                                EMPTY_DATA
                                            )}
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            </Wrapper>
        </Stack>
    );
};

export default AccountShow;