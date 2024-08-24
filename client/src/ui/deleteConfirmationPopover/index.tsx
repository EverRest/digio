import { Button, Grid, Popover } from "@mui/material";
import React, { ReactElement } from "react";
import { State } from "../../reducers/deleteCofirmation";
import { useTranslation } from "react-i18next";
/* istanbul ignore next */
export const DeleteConfirmationPopover = ({
  state,
  handleClose,
  handleDeleteConfirmation,
}: ReturnType): ReactElement => {
  const { t } = useTranslation();
  return (
    <>
      <Popover
        role={"delete-confirmation-popover"}
        id={state.id}
        open={!!state.anchorEl}
        anchorEl={state.anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Grid container sx={{ p: 2 }} spacing={2}>
          <Grid item onClick={handleClose}>
            <Button role="cancel-button" size="small">
              {t("cancel")}
            </Button>
          </Grid>
          <Grid item>
            <Button
              role="confirm-button"
              color="error"
              variant="contained"
              size="small"
              onClick={handleDeleteConfirmation}
            >
              {t("delete")}
            </Button>
          </Grid>
        </Grid>
      </Popover>
    </>
  );
};

interface ReturnType {
  state: State;
  handleClose: () => void;
  handleDeleteConfirmation: () => void;
}
