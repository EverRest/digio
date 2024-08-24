import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingBox } from "../../../ui/table/styled";
import { EMPTY_DATA, FormMessageErrorState } from "../../../constants";
import { ErrorBox } from "../../home/styled";
import { WalletShowType } from "../../../types/be/wallet";
import Loader from "../../Loader";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { SmallLightText, Wrapper } from "./styled";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/system";
import { getWallet } from "../../../api/wallets";
import { getRandomColor } from "../../../utils/common";
import Tags from "../../tags/Tags";

const WalletShow = (): ReactElement => {
    const { t } = useTranslation();
    const [walletData, setWalletData] = useState<WalletShowType | null>(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [statusError] = useState(false);

    const { id } = useParams();

    const getData = async (): Promise<void> => {
        if (!id) return;
        const response = await getWallet(id);
        const data: WalletShowType = await response.json();
        setWalletData(data);
        setIsDataLoaded(true);
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (statusError) {
        return <ErrorBox formMessage={FormMessageErrorState} />;
    }

    if (!isDataLoaded && !walletData) {
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
                                    {walletData?.image ? (
                                        <Box
                                            component="img"
                                            src={`${process.env.REACT_APP_SERVER_URL}/storage/${walletData.image}`}
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
                                            <SmallLightText>{t("form.name")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {walletData?.walletName ? walletData?.walletName : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.type")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h4">
                                                {walletData?.walletType ? walletData?.walletType : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.address")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {walletData?.address ? walletData?.address : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.description")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {walletData?.description ? walletData?.description : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.encryptedCredentials")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            {walletData?.encryptedCredentials ? (
                                                Object.entries(walletData.encryptedCredentials).map(([key, value]) => (
                                                    <Typography key={key} variant="h6">
                                                        {`${key}: `}<code>{value}</code>
                                                    </Typography>
                                                ))
                                            ) : (
                                                EMPTY_DATA
                                            )}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {walletData?.tags ? (
                                                <Tags tags={walletData.tags}/>
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

export default WalletShow;