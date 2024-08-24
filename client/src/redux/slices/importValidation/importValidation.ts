import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Notification as BENotification } from "../../../types/be/notification";
/* istanbul ignore file */
export interface ImportValidationState {
  importValidationNotification: BENotification | null;
  downloadLink: string;
  fileName: string;
}
/* istanbul ignore file */
const initialState: ImportValidationState = {
  importValidationNotification: null,
  downloadLink: "",
  fileName: "",
};
/* istanbul ignore file */
export const importValidationSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    setImportValidationNotification: (
      state: ImportValidationState,
      action: PayloadAction<BENotification>
    ): void => {
      state.importValidationNotification = action.payload;
    },
    setDownloadLink: (
      state: ImportValidationState,
      action: PayloadAction<string>
    ): void => {
      state.downloadLink = action.payload;
    },
    setFileName: (
      state: ImportValidationState,
      action: PayloadAction<string>
    ): void => {
      state.fileName = action.payload;
    },
  },
});

export const { setImportValidationNotification, setDownloadLink, setFileName } =
  importValidationSlice.actions;

export default importValidationSlice.reducer;
