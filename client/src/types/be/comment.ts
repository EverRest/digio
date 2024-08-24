import { NotificationDataEntity } from "./notification";

export interface Comment {
  id: number;
  body: string;
  user: {
    id: 1;
    first_name: string;
    last_name: string;
  };
  created_at: number;
  updated_at: number;
}

export interface OpenCommentsListWidget {
  id: number;
  body: string;
  updated_at: number;
  property: { id: number; object_name: string };
  user: { first_name: string; last_name: string };
  status: { id: CommentsStatusIds | null; code: string; name: string };
  entity: NotificationDataEntity;
}

export interface OpenCommentsUsersListWidget {
  id: number;
  first_name: string;
  last_name: string;
  open_comments_count: number;
  comments_count: number;
}

export enum CommentsStatusIds {
  OPEN_COMMENTS = 1,
  DONE = 2,
}
