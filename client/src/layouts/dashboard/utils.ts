import React from "react";
import { Archive } from "../../redux/slices/archive/archive";
import { Notification as BENotification } from "../../types/be/notification";

/* istanbul ignore next */
export const drawerToggleCallback = (
  mobileOpen: boolean,
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>
) => {
  return (): void => {
    setMobileOpen(!mobileOpen);
  };
};
/* istanbul ignore next */
export const prepareArchive = (notification: BENotification): Archive => {
  const {
    data: {
      entity: { id },
      message,
    },
  } = notification;
  const finished = String(message).length > 4;
  return {
    id,
    progress: !finished ? Number(message) : 100,
    finished,
  };
};
