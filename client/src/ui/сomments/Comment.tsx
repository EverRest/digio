import { Grid } from "@mui/material";
import { formatTimestamp } from "../../utils/date";
import { DeleteIcon } from "../table/styled";
import React, { ReactElement } from "react";
import { Comment as BEComment } from "../../types/be/comment";
import { useDeleteConfirmation } from "../../hooks/useDeleteConfirmation";
import { DeleteConfirmationPopover } from "../deleteConfirmationPopover";
import {
  CommentBodyWrapper,
  CommentLeftAt,
  CommentLeftBy,
  CommentWrapper,
} from "./styled";

/* istanbul ignore next */
const Comment = ({
  comment,
  handleDelete,
  deleting,
}: {
  comment: BEComment;
  handleDelete: (comment: BEComment) => void;
  deleting: boolean;
}): ReactElement => {
  const { confirmDeleteState, showConfirmationPopover, handleClose } =
    useDeleteConfirmation();

  return (
    <>
      <CommentWrapper container key={`comment-${comment.id}`}>
        <Grid item xs={12}>
          <Grid container justifyContent={"space-between"}>
            <Grid item>
              {comment.user && (
                <CommentLeftBy>{`${comment.user.first_name} ${comment.user.last_name}`}</CommentLeftBy>
              )}
              {!comment.user && <CommentLeftBy>{"---"}</CommentLeftBy>}
              <CommentLeftAt>
                {formatTimestamp(`${comment.created_at}`, "DD.MM.yyyy HH:MM")}
              </CommentLeftAt>
            </Grid>
            <Grid item>
              <DeleteIcon
                aria-describedby={"fdf"}
                size={15}
                onClick={(e) => showConfirmationPopover(e, deleting)}
                data-testid={"delete-comment"}
              />
            </Grid>
          </Grid>
        </Grid>
        <CommentBodyWrapper
          item
          xs={12}
          //TODO: don't forget to investigate how secure it is
          dangerouslySetInnerHTML={{ __html: comment.body }}
        ></CommentBodyWrapper>
      </CommentWrapper>
      <DeleteConfirmationPopover
        state={confirmDeleteState}
        handleClose={handleClose}
        handleDeleteConfirmation={() => {
          handleClose();
          handleDelete(comment);
        }}
      />
    </>
  );
};

export default Comment;
