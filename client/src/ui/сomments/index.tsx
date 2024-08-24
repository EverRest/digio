import React, {
  ChangeEvent,
  Dispatch,
  ReactElement,
  useEffect,
  useRef,
} from "react";
import { Comment as BEComment } from "../../types/be/comment";
import Comment from "./Comment";
import { Box, Grid, Pagination } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import useAppSelector from "../../hooks/useAppSelector";
import CKEditor from "../ckeditor";
import useCKEditor from "../ckeditor/useCKEditor";
import Fancybox from "../fancybox";
/* istanbul ignore next */
const mentionStyle = (strings: TemplateStringsArray, color: string): string =>
  `background-color: ${color}; border-radius: 10px; color: white; padding: 1px 5px`;
/* istanbul ignore next */
const imageStyles =
  "width: 100%;max-width: 300px;height: auto; cursor: pointer";
/* istanbul ignore next */
const figureStyles = "display:flex; justify-content: center";

/* istanbul ignore next */
const Comments = ({
  comments,
  currentPage,
  totalPages,
  handleDeleteComment,
  handlePaginationChange,
  editorContent,
  setEditorContent,
  handleSaveComment,
  deleting,
}: {
  comments: BEComment[];
  handleDeleteComment: (comment: BEComment) => Promise<void>;
  handlePaginationChange: (event: ChangeEvent<unknown>, page: number) => void;
  editorContent: string;
  totalPages: number;
  currentPage: number;
  setEditorContent: Dispatch<React.SetStateAction<string>>;
  handleSaveComment: () => Promise<void>;
  deleting: boolean;
}): ReactElement => {
  const commentsRef = useRef();
  const { usersFeed } = useCKEditor();
  const { _user } = useAppSelector((state) => state.user);

  useEffect(() => {
    const mentions = document.getElementsByClassName("mention");
    for (let i = 0; i < mentions.length; i++) {
      if (
        //@ts-ignore
        mentions[i].attributes["data-user-id"].value == _user?.id
      ) {
        //@ts-ignore
        mentions[i].style = mentionStyle`${blue[800]}`;
      } else {
        //@ts-ignore
        mentions[i].style = mentionStyle`${grey[600]}`;
      }
    }
  });

  useEffect(() => {
    if (commentsRef && commentsRef.current) {
      //@ts-ignore
      const figures = commentsRef.current?.getElementsByTagName("figure");
      for (let i = 0; i < figures.length; i++) {
        figures[i].setAttribute("style", figureStyles);
      }
      //@ts-ignore
      const images = commentsRef.current?.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("style", imageStyles);
        images[i].setAttribute("data-fancybox", "gallery");
        images[i].setAttribute("data-src", images[i].getAttribute("src"));
      }
      //@ts-ignore
      const links = commentsRef.current?.getElementsByTagName("a");
      for (let i = 0; i < links.length; i++) {
        links[i].setAttribute("target", "_blank");
      }
    }
  }, [comments]);

  return (
    <>
      <CKEditor
        feeds={[usersFeed]}
        content={editorContent}
        onChange={(event: any, editor: any): void => {
          setEditorContent(editor.getData());
        }}
        handleSave={handleSaveComment}
      />
      {comments && (
        <Fancybox options={{ infinite: false }}>
          <Box sx={{ py: 3, pl: 1 }} ref={commentsRef} className={"sssssss"}>
            {comments.map((comment: BEComment) => (
              <Comment
                comment={comment}
                handleDelete={handleDeleteComment}
                key={`comment-${comment.id}`}
                deleting={deleting}
              />
            ))}
            {totalPages > 1 && (
              <Grid container justifyContent={"flex-end"}>
                <Pagination
                  shape="rounded"
                  page={currentPage}
                  count={totalPages}
                  size="small"
                  onChange={handlePaginationChange}
                />
              </Grid>
            )}
          </Box>
        </Fancybox>
      )}
    </>
  );
};

export default Comments;
