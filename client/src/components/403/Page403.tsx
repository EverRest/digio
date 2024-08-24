import React from "react";
import { Helmet } from "react-helmet-async";
import { Typography } from "@mui/material";
import { Wrapper } from "../404/styled";
import { useTranslation } from "react-i18next";

function Page403(): React.ReactElement {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Helmet title="404 Error" />
      <Typography component="h1" variant="h1" align="center" gutterBottom>
        {"403"}
      </Typography>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        {t("pages403.noRightsForRoute")}
      </Typography>
      <Typography component="h2" variant="body1" align="center" gutterBottom>
        {t("pages403.contactAdmin")}
      </Typography>
    </Wrapper>
  );
}

export default Page403;
