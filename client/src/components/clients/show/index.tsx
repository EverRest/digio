import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LoadingBox } from "../../../ui/table/styled";
import { useFetch } from "../../../hooks/useFetch";
import { getClientById, updateClientStatus } from "../../../api/clients";
import { EMPTY_DATA, FormMessageErrorState } from "../../../constants";
import { ErrorBox } from "../../home/styled";
import { ClientShowType } from "../../../types/be/client";
import Loader from "../../Loader";
import { Card, Grid, Switch, Tooltip, Typography } from "@mui/material";
import {
  InfoContainer,
  LogoContainer,
  SmallLightText,
  Wrapper,
} from "./styled";
import { useTranslation } from "react-i18next";
import { HTTP_STATUS_CODES } from "../../../types/server";
import { SelectBox } from "../../../ui/multiselectDropdown/styled";
import { Stack } from "@mui/system";

const ClientShow = (): ReactElement => {
  const { t } = useTranslation();
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  const [enabling, setEnabling] = useState(false);
  const [statusError, setStatusError] = useState(false);

  const { clientId } = useParams();

  const {
    data: clientData,
    isLoading,
    isError,
    run,
  } = useFetch<ClientShowType>();

  const getData = async (): Promise<void> => {
    await run(getClientById(clientId!));
    setIsDataLoaded(true);
  };
  useEffect(() => {
    getData();
  }, [clientId]);

  const handleChangeClientStatus = useCallback(
    async (id: number) => {
      setEnabling(true);
      const response = await updateClientStatus(id);

      if (response.status !== HTTP_STATUS_CODES.OK) {
        setStatusError(true);
      } else {
        getData();
        setEnabling(false);
      }
    },
    [updateClientStatus, getData]
  );

  if (isError || statusError) {
    return <ErrorBox formMessage={FormMessageErrorState} />;
  }

  if (!isDataLoaded && (isLoading || !clientData)) {
    return (
      <div data-testid="loader">
        <LoadingBox>
          <Loader />
        </LoadingBox>
      </div>
    );
  }

  const showClientModule = (): ReactElement => {
    const clientModules = clientData?.modules ? [...clientData.modules] : [];
    return (
      <SelectBox>
        <Typography variant="h4" textAlign="center">
          {clientModules.length > 0 ? (
            <>
              {clientModules[0]}
              {clientModules.length > 1 && (
                <div>{`${t("client.and")} ${clientModules.length - 1} ${t(
                  "client.moreClient"
                )} `}</div>
              )}
            </>
          ) : (
            EMPTY_DATA
          )}
        </Typography>
      </SelectBox>
    );
  };
  const showClientIntegrations = (): ReactElement => {
    const clientIntegrations = clientData?.integrations
      ? [...clientData.integrations]
      : [];
    return (
      <SelectBox>
        <Typography variant="h4" textAlign="center">
          {clientIntegrations.length > 0 ? (
            <>
              {clientIntegrations[0]}
              {clientIntegrations.length > 1 && (
                <div>{`${t("client.and")} ${clientIntegrations.length - 1} ${t(
                  "client.moreClient"
                )} `}</div>
              )}
            </>
          ) : (
            EMPTY_DATA
          )}
        </Typography>
      </SelectBox>
    );
  };

  const tooltipTitle =
    clientData?.modules?.length === 0
      ? null
      : clientData?.modules?.map((item: string, index: number) => (
          <Typography key={index}>{item}</Typography>
        ));

  const clientIntegrationTooltipTitle =
    clientData?.integrations?.length === 0
      ? null
      : clientData?.integrations?.map((item: string, index: number) => (
          <Typography key={index}>{item}</Typography>
        ));

  return (
    <>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
      >
        <Wrapper>
          <Grid item sm={12}>
            <Card>
              <Grid container>
                <InfoContainer item sm={4} md={3}>
                  <Typography variant="h4">
                    {clientData?.name ? clientData?.name : EMPTY_DATA}
                  </Typography>
                  <SmallLightText>{t("client.name")}</SmallLightText>
                </InfoContainer>
                <InfoContainer item sm={4} md={3}>
                  <Typography variant="h4">
                    {clientData?.code ? clientData?.code : EMPTY_DATA}
                  </Typography>
                  <SmallLightText>{t("client.code")}</SmallLightText>
                </InfoContainer>
                <InfoContainer item sm={4} md={3}>
                  <Typography variant="h4">
                    {clientData?.domain ? clientData?.domain : EMPTY_DATA}
                  </Typography>
                  <SmallLightText>{t("client.domain")}</SmallLightText>
                </InfoContainer>
                <InfoContainer item sm={4} md={3}>
                  <Switch
                    name="is_enabled"
                    value={clientData?.is_enabled}
                    checked={clientData?.is_enabled}
                    onChange={() =>
                      clientData && handleChangeClientStatus(clientData?.id)
                    }
                    disabled={enabling}
                  />
                  <SmallLightText>{t("client.enable")}</SmallLightText>
                </InfoContainer>
                <InfoContainer item sm={4} md={3}>
                  <Typography variant="h4">
                    {clientData?.zapier_email
                      ? clientData?.zapier_email
                      : EMPTY_DATA}
                  </Typography>
                  <SmallLightText>{t("client.zapierEmail")}</SmallLightText>
                </InfoContainer>
                <Tooltip placement="top" title={tooltipTitle}>
                  <InfoContainer item sm={4} md={3}>
                    {showClientModule()}
                    <SmallLightText>{t("client.modules")}</SmallLightText>
                  </InfoContainer>
                </Tooltip>
                <Tooltip placement="top" title={clientIntegrationTooltipTitle}>
                  <InfoContainer item sm={4} md={3}>
                    {showClientIntegrations()}
                    <SmallLightText>{t("client.integrations")}</SmallLightText>
                  </InfoContainer>
                </Tooltip>
                <InfoContainer item sm={4} md={3}>
                  {clientData?.images?.logo ? (
                    <LogoContainer
                      src={clientData?.images?.logo}
                    ></LogoContainer>
                  ) : (
                    EMPTY_DATA
                  )}
                  <SmallLightText>{t("client.logo")}</SmallLightText>
                </InfoContainer>
              </Grid>
            </Card>
          </Grid>
        </Wrapper>
      </Stack>
    </>
  );
};

export default ClientShow;
