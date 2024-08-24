/* istanbul ignore next */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type THEME_TYPE = "DARK" | "DEFAULT";
type LANG_TYPE = "en" | "de";

export interface SettingsState {
  theme: THEME_TYPE;
  lang: LANG_TYPE;
}
/* istanbul ignore next */
const initialState: SettingsState = {
  theme: "DARK",
  lang: "de",
};
/* istanbul ignore next */
export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme: (
      state: SettingsState,
      action: PayloadAction<THEME_TYPE>
    ): void => {
      state.theme = action.payload;
    },
    setLang: (state: SettingsState, action: PayloadAction<LANG_TYPE>): void => {
      state.lang = action.payload;
    },
  },
});
/* istanbul ignore next */
export const { setTheme, setLang } = settingsSlice.actions;

export default settingsSlice.reducer;
