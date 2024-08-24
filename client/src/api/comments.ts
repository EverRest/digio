import http from "../utils/http";
import { PostCommentBody } from "../types/fe/comments";

/* istanbul ignore next */
export const getCommentMentions = async (params: string): Promise<Response> => {
  return await http.get(`/api/comments/users${params}`);
};
/* istanbul ignore next */
export const getComments = async (params: string): Promise<Response> => {
  return await http.get(`/api/comments${params}`);
};
/* istanbul ignore next */
export const getOpenCommentsCountPerUser = async (
  params: string
): Promise<Response> => {
  return await http.get(`/api/users/comments${params}`);
};
/* istanbul ignore next */
export const createComment = async (
  body: PostCommentBody
): Promise<Response> => {
  return await http.post(`/api/comments`, body);
};
/* istanbul ignore next */
export const deleteComment = async (id: number): Promise<Response> => {
  return await http.delete(`/api/comments/${id}`);
};
/* istanbul ignore next */
export const updateCommentStatus = async (
  id: number,
  data: { status_id: 1 | 2 }
): Promise<Response> => {
  return await http.put(`/api/comments/${id}/statuses`, data);
};
