import React from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { Button as MuiButton, Snackbar } from "@mui/material";
import { spacing } from "@mui/system";

const Button = styled(MuiButton)(spacing);

type SnackbarProps = {
  message: string;
  open: boolean;
  handleClose: () => void;
  autoHideDuration?: number;
  color?:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
};
export default ({
  open,
  handleClose,
  message,
  color,
  autoHideDuration = 6000,
}: SnackbarProps): JSX.Element => {
  const { t } = useTranslation();
  return (
    <Snackbar
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      message={message}
      action={
        <React.Fragment>
          <Button
            data-testid={"snackbar-close"}
            color={color}
            size="small"
            onClick={handleClose}
          >
            {t("close")}
          </Button>
        </React.Fragment>
      }
    />
  );
};
