import { Chat } from "./chat";

interface NotificationRelationship {
  id: number;
  name: string;
  relationship: NotificationRelationship;
}

export interface NotificationDataEntity {
  id: number;
  name: string;
  relationship: NotificationRelationship | null;
}

export interface Notification {
  id: number;
  type: string;
  socket_channel: string;
  socket_event: string;
  sender: {
    id: number;
    first_name: string;
    last_name: string;
    avatar: string;
  };
  relation: string;
  relation_id: number;
  data: {
    message: string;
    entity: NotificationDataEntity;
    sub_message: string;
  };
  read_at: number;
  created_at: number;
}

export interface ChatNotification {
  data : {
    message: string;
    entity: Chat;
  }
}

export interface NotificationSettings {
  code: string;
  id: number;
  name: string;
}
