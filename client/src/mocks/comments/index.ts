import { HTTP_METHODS } from "../../types/server";
import {
  index,
  mockOpenCommentsCountPerUserData,
  mockUpdateCommentStatusData,
  mockUpdateCommentStatusData2,
} from "./data";

export const getCommentsMock = {
  method: HTTP_METHODS.GET,
  url: `comments`,
  data: index,
  status: 200,
};

export const getMockOpenCommentsCountPerUser = {
  method: HTTP_METHODS.GET,
  url: "users/comments",
  data: mockOpenCommentsCountPerUserData,
  status: 200,
};

export const mockUpdateCommentStatus = {
  method: HTTP_METHODS.PUT,
  url: `comments/${index?.data[0]?.id}/statuses`,
  data: mockUpdateCommentStatusData,
  status: 200,
};

export const mockUpdateCommentStatus2 = {
  method: HTTP_METHODS.PUT,
  url: `comments/${index?.data[1]?.id}/statuses`,
  data: mockUpdateCommentStatusData2,
  status: 200,
};

export const deleteCommentMock = {
  method: HTTP_METHODS.DELETE,
  url: `comments/${index?.data[0]?.id}`,
  data: index,
  status: 200,
}