import React, {ReactElement, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {LoadingBox} from "../../../ui/table/styled";
import {EMPTY_DATA, FormMessageErrorState} from "../../../constants";
import {ErrorBox} from "../../home/styled";
import {ResourceShowType} from "../../../types/be/resource";
import Loader from "../../Loader";
import {Card, CardContent, Grid, Typography, Box} from "@mui/material";
import {SmallLightText, Wrapper} from "./styled";
import {useTranslation} from "react-i18next";
import {Stack} from "@mui/system";
import {getResource} from "../../../api/resources";
import {getRandomColor} from "../../../utils/common";
import Tags from "../../tags/Tags";

const ResourceShow = (): ReactElement => {
    const {t} = useTranslation();
    const [resourceData, setResourceData] = useState<ResourceShowType | null>(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [statusError] = useState(false);

    const {id} = useParams();

    const getData = async (): Promise<void> => {
        if (!id) return;
        const response = await getResource(id);
        const data: ResourceShowType = await response.json();
        setResourceData(data);
        setIsDataLoaded(true);
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (statusError) {
        return <ErrorBox formMessage={FormMessageErrorState}/>;
    }

    if (!isDataLoaded && !resourceData) {
        return (
            <div data-testid="loader">
                <LoadingBox>
                    <Loader/>
                </LoadingBox>
            </div>
        );
    }

    return (
        <Stack direction="column" justifyContent="center" alignItems="center" spacing={2}>
            <Wrapper>
                <Grid item sm={12}>
                    <Card variant="outlined" sx={{mb: 2}}>
                        <CardContent>
                            <Grid container spacing={2}>
                                <Grid item sm={12} md={4}
                                      sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    {resourceData?.image ? (
                                        <Box
                                            component="img"
                                            src={`${process.env.REACT_APP_SERVER_URL}/storage/${resourceData.image}`}
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
                                                {resourceData?.url ? resourceData?.url : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.type")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h4">
                                                {resourceData?.resourceType ? resourceData?.resourceType : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.description")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {resourceData?.description ? resourceData?.description : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.encryptedCredentials")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            {resourceData?.encryptedCredentials ? (
                                                Object.entries(resourceData.encryptedCredentials).map(([key, value]) => (
                                                    <Typography key={key} variant="h6">
                                                        {`${key}: `}<code>{value}</code>
                                                    </Typography>
                                                ))
                                            ) : (
                                                EMPTY_DATA
                                            )}
                                        </Grid>
                                        <Grid item xs={6}>
                                            {resourceData?.tags ? (
                                                <Tags tags={resourceData.tags}/>
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

export default ResourceShow;