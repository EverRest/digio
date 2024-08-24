import React, { ReactElement } from "react";
import DialogContent from "@mui/material/DialogContent";
import { Button, Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import { ConfirmationModalProps } from "./types";
/* istanbul ignore next */
export const ConfirmationModal = ({
  confirmText,
  cancelText,
  titleText,
  visible,
  confirmButtonProps,
  setVisible,
  handleCancel,
  handleConfirm,
}: ConfirmationModalProps): ReactElement => {
  return (
    <Dialog
      maxWidth={"xs"}
      open={visible}
      onClose={() => {
        setVisible(false);
      }}
      aria-labelledby="max-width-dialog-title"
      data-testid="confirmation-popup"
    >
      <DialogContent>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography variant="h6" gutterBottom component="div" mb={5} sx={{ whiteSpace: "pre-line" }}>
            {titleText}
          </Typography>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              onClick={handleConfirm}
              variant="contained"
              color={"success"}
              data-testid="confirm-button"
              {...confirmButtonProps}
            >
              {confirmText}
            </Button>

            {cancelText ? (
              <Button onClick={handleCancel} data-testid="cancel-button">
                {cancelText}
              </Button>
            ) : null}

          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmationModal;
