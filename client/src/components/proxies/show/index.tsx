import React, { ReactElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingBox } from "../../../ui/table/styled";
import { EMPTY_DATA, FormMessageErrorState } from "../../../constants";
import { ErrorBox } from "../../home/styled";
import { ProjectShowType } from "../../../types/be/project";
import Loader from "../../Loader";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";
import { SmallLightText, Wrapper } from "./styled";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/system";
import { getProject } from "../../../api/projects";
import { getRandomColor } from "../../../utils/common";

const ProjectShow = (): ReactElement => {
    const { t } = useTranslation();
    const [projectData, setProjectData] = useState<ProjectShowType | null>(null);
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [statusError] = useState(false);

    const { id } = useParams();

    const getData = async (): Promise<void> => {
        if (!id) return;
        const response = await getProject(id);
        const data: ProjectShowType = await response.json();
        setProjectData(data);
        setIsDataLoaded(true);
    };

    useEffect(() => {
        getData();
    }, [id]);

    if (statusError) {
        return <ErrorBox formMessage={FormMessageErrorState} />;
    }

    if (!isDataLoaded && !projectData) {
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
                                    {projectData?.image ? (
                                        <Box
                                            component="img"
                                            src={`${process.env.REACT_APP_SERVER_URL}/storage/${projectData.image}`}
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
                                                {projectData?.url ? projectData?.url : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.type")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h4">
                                                {projectData?.projectType ? projectData?.projectType : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.description")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {projectData?.description ? projectData?.description : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.farmDescription")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {projectData?.farmDescription ? projectData?.farmDescription : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.start")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {projectData?.start ? projectData?.start : EMPTY_DATA}
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <SmallLightText>{t("form.end")}</SmallLightText>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography variant="h6">
                                                {projectData?.end ? projectData?.end : EMPTY_DATA}
                                            </Typography>
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

export default ProjectShow;