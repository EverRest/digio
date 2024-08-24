import React, { useState } from "react";
import { ReactElement } from "react";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import ErrorIcon from "@mui/icons-material/Error";
import { Grid } from "@mui/material";
import MUISnackbar from "@mui/material/Snackbar";
import {
  Paper,
  TypographyActions,
  TypographyCopied,
  TypographyTitle,
} from "./styled";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { useTranslation } from "react-i18next";
/* istanbul ignore next */
const Snackbar = ({
  open,
  title,
  link,
  onClose,
  type = "success",
  autoHideDuration = 6000,
}: {
  open: boolean;
  title: string;
  link?: string;
  onClose: () => void;
  autoHideDuration?: number;
  type?: string;
}): ReactElement => {
  const { t } = useTranslation();
  const [isCopiedBadgeVisible, setIsCopiedBadgeVisible] = useState(false);

  const icon = (): ReactElement => {
    switch (type) {
      case "error":
        return <ErrorIcon color={"error"} />;
      default:
        return <CheckCircleIcon color={"success"} />;
    }
  };

  return (
    <MUISnackbar
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={onClose}
      action={
        <>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={onClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </>
      }
    >
      <Paper elevation={3}>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            {icon()}
          </Grid>
          <Grid item xs={10}>
            <Grid container justifyContent={"space-between"}>
              <Grid item>
                <TypographyTitle variant={"body2"}>{title}</TypographyTitle>
                {link && !!link.length && (
                  <Grid container spacing={2}>
                    <Grid item>
                      <TypographyActions
                        variant={"body2"}
                        onClick={() => (window.location.href = link)}
                      >
                        {t("edit")}
                      </TypographyActions>
                    </Grid>
                    <Grid item>-</Grid>
                    <Grid item>
                      <TypographyActions
                        variant={"body2"}
                        sx={{ mr: 1 }}
                        onClick={() => {
                          navigator.clipboard.writeText(link);
                          setIsCopiedBadgeVisible(true);
                        }}
                      >
                        {t("copyLink")}
                      </TypographyActions>
                      {isCopiedBadgeVisible && (
                        <TypographyCopied>{t("copied")}!</TypographyCopied>
                      )}
                    </Grid>
                  </Grid>
                )}
              </Grid>
              <Grid item>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={onClose}
                >
                  <CloseIcon color={"success"} fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </MUISnackbar>
  );
};

export default Snackbar;
