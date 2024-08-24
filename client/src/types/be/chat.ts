import { User } from "./user";

export interface Chat {
  _id: string;
  tenant_request_id: number;
  user: Pick<User, "_id" | "name" | "username">;
  created_at: number;
  body: string;
  is_read: boolean;
}
