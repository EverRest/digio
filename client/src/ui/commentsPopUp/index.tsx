/* istanbul ignore file */

import React, { ReactElement } from "react";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { useTranslation } from "react-i18next";
import Button from "../button/Button";
import useComments from "../сomments/useComments";
import Comments from "../сomments";
import { Comment } from "./types";

const CommentsPopup = ({
  handleCloseDialog,
  id,
  relation,
}: Comment): ReactElement => {
  const { t } = useTranslation();
  const {
    comments,
    content,
    setContent,
    currentPage,
    totalPages,
    handleCommentSave,
    handleCommentDelete,
    handlePaginationChange,
    deleting,
  } = useComments({
    relation: relation,
    relation_id: id!,
  });

  return (
    <Dialog
      role="release-comment"
      fullWidth
      open={true}
      onClose={handleCloseDialog}
      aria-labelledby="max-width-dialog-title"
      data-testid="comment-modal"
    >
      <DialogTitle>
        <Typography
          variant="h6"
          component="div"
          justifyContent="space-around"
          width="100%"
        >
          {t("comment")}
        </Typography>
      </DialogTitle>
      <DialogContent dividers sx={{ overflowX: "hidden" }}>
        <Comments
          editorContent={content}
          setEditorContent={setContent}
          handleSaveComment={handleCommentSave}
          comments={comments}
          currentPage={currentPage}
          totalPages={totalPages}
          handleDeleteComment={handleCommentDelete}
          handlePaginationChange={handlePaginationChange}
          deleting={deleting}
        />
      </DialogContent>
      <DialogActions>
        <Button title={t("cancel")} onClick={handleCloseDialog} />
      </DialogActions>
    </Dialog>
  );
};

export default CommentsPopup;
