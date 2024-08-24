import DialogContent from "@mui/material/DialogContent";
import { Grid, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React, { ReactElement, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { DeleteConfirmationModalProps } from "./types";
import Button from "../../ui/button/Button";
import useIsMounted from "../../hooks/useIsMounted";
import { FormMessageErrorState } from "../../constants";
import { ErrorBox } from "../../components/home/styled";
/* istanbul ignore next */
export const DeleteConfirmationModal = ({
  isConfirmToRemoveModalOpen,
  handleConfirmToRemoveModalClose,
  onRowRemove,
  confirmationText,
  deletingError = "",
  cancelButtonTitle,
  deleteButtonTitle,
  maxWidth = "xs",
}: DeleteConfirmationModalProps): ReactElement => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleRemove = useCallback(async () => {
    setLoading(true);
    await onRowRemove();
    isMounted() && setLoading(false);
  }, [onRowRemove]);
  const isMounted = useIsMounted();

  return (
    <Dialog
      maxWidth={maxWidth}
      open={isConfirmToRemoveModalOpen}
      onClose={handleConfirmToRemoveModalClose}
      aria-labelledby="max-width-dialog-title"
      data-testid="dialog-popup"
    >
      <DialogContent>
        <Grid container direction="column" justifyContent="flex-start">
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            textAlign={"center"}
            mb={5}
          >
            {confirmationText ?? t("deleteConfirmation")}
          </Typography>
          {deletingError && <ErrorBox formMessage={FormMessageErrorState} />}
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Button
              title={cancelButtonTitle ?? t("cancel")}
              onClick={handleConfirmToRemoveModalClose}
              type="button"
              testId="cancel-button"
              variant="text"
            />
            <Button
              title={deleteButtonTitle || t("delete")}
              testId="delete-button"
              type="button"
              variant="contained"
              color="error"
              onClick={handleRemove}
              isLoading={loading}
              disabled={loading}
            />
          </Grid>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteConfirmationModal;
