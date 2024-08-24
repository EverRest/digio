import { HTTP_METHODS } from "../../types/server";
import { notifications } from "./data";

export const mockGetNotifications = {
  method: HTTP_METHODS.GET,
  url: `notifications`,
  data: notifications,
  status: 200,
};

export const mockPostNotificationRead = {
  method: HTTP_METHODS.PATCH,
  url: `notifications/toggle`,
  data: notifications,
  status: 200,
};