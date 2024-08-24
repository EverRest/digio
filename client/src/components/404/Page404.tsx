import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Typography } from "@mui/material";
import { Button, Wrapper } from "./styled";
import { useTranslation } from "react-i18next";

function Page404(): React.ReactElement {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Helmet title="404 Error" />
      <Typography component="h1" variant="h1" align="center" gutterBottom>
        {"404"}
      </Typography>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        {t("pages404.pageNotFound")}
      </Typography>
      <Typography component="h2" variant="body1" align="center" gutterBottom>
        {t("pages404.pageWasRemoved")}
      </Typography>

      <Button
        component={Link}
        data-testid="return-to-website-button"
        to={`/`}
        variant="contained"
        color="secondary"
        mt={2}
      >
        {t("pages404.returnToWebsite")}
      </Button>
    </Wrapper>
  );
}

export default Page404;
