import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Archive {
  id: number;
  name?: string;
  progress?: number;
  finished?: boolean;
}

export interface ArchiveState {
  archives: Archive[];
  openedIds: Archive["id"][];
}

const initialState: ArchiveState = {
  archives: [],
  openedIds: [],
};
/* istanbul ignore next */
export const archiveSlice = createSlice({
  name: "archive",
  initialState,
  reducers: {
    addArchive: (state: ArchiveState, action: PayloadAction<Archive>): void => {
      state.archives.push(action.payload);
    },
    setArchive: (state: ArchiveState, action: PayloadAction<Archive>): void => {
      state.archives = state.archives.map((arc) =>
          arc.id !== action.payload.id ? arc : {...arc, ...action.payload}
      );
    },
    setArchives: (
      state: ArchiveState,
      action: PayloadAction<Archive[]>
    ): void => {
      state.archives = action.payload;
    },
    setOpenedIds: (
      state: ArchiveState,
      action: PayloadAction<Archive["id"][]>
    ): void => {
      state.openedIds = action.payload;
    },
  },
});

export const { addArchive, setArchive, setArchives, setOpenedIds } =
  archiveSlice.actions;

export default archiveSlice.reducer;
