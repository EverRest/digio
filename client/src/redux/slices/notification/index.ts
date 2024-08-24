import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification as BENotification } from "../../../types/be/notification";

export interface NotificationInitState {
  notifications: BENotification[];
}

const initialState: NotificationInitState = {
  notifications: [],
};
/* istanbul ignore next */
export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setNotifications: (
      state: NotificationInitState,
      action: PayloadAction<BENotification[]>
    ): void => {
      state.notifications = action.payload;
    },
    pushNotification: (
      state: NotificationInitState,
      action: PayloadAction<BENotification>
    ): void => {
      state.notifications.unshift(action.payload);
    },
  },
});

export const { setNotifications, pushNotification } = notificationSlice.actions;

export default notificationSlice.reducer;
