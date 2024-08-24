import React, { useEffect, useState } from "react";
import { Comment as BEComment } from "../../types/be/comment";
import { createComment, deleteComment, getComments } from "../../api/comments";
import { objectGetParamsToString } from "../../utils/common";
import { COMMENTABLE } from "../../constants";
import useCKEditor from "../ckeditor/useCKEditor";

interface Props {
  relation: COMMENTABLE;
  relation_id: string;
}

interface ReturnType {
  fetchComments: () => Promise<void>;
  comments: BEComment[];
  currentPage: number;
  totalPages: number;
  handlePaginationChange: (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => void;
  handleCommentDelete: (comment: BEComment) => Promise<void>;
  handleCommentSave: () => Promise<void>;
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  deleting: boolean;
}
/* istanbul ignore next */
const useComments = ({ relation, relation_id }: Props): ReturnType => {
  const { content, setContent } = useCKEditor();
  const [comments, setComments] = useState<BEComment[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [deleting, setDeleting] = useState(false);

  const fetchComments = async (): Promise<void> => {
    const response = await getComments(
      `?${objectGetParamsToString({
        relation_id,
        relation,
        page: currentPage,
      })}`
    );
    const dataJson = await response.json();
    setTotalPages(dataJson?.meta?.last_page);
    setComments(dataJson.data);
  };

  const handleCommentSave = async (): Promise<void> => {
    if (!content) return;

    const response = createComment({
      relation,
      relation_id,
      body: content,
      file_id: [],
    });
    const comment = (await (await response).json()).data;
    setContent("");
    setComments((comments) => [comment, ...comments]);
  };

  const handleCommentDelete = async (comment: BEComment): Promise<void> => {
    setDeleting(true);

    try {
      await deleteComment(comment.id);
      fetchComments();
    } catch (e) {
      console.log(e);
    } finally {
      setDeleting(false);
    }
  };

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ): void => {
    setCurrentPage(page);
  };

  useEffect(() => {
    if (relation && relation_id) {
      fetchComments();
    }
  }, [currentPage, relation, relation_id]);

  return {
    fetchComments,
    comments,
    currentPage,
    totalPages,
    handlePaginationChange,
    handleCommentDelete,
    handleCommentSave,
    content,
    setContent,
    deleting,
  };
};

export default useComments;
