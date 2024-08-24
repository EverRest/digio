import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../types/be/user";
import { dateNowSeconds } from "../../../utils/date";


export interface UserState {
  _user: User | null;
  isAuthenticated: boolean;
}

const isSessionExpired = (): boolean => {
  const tokenExpirationDate =
    window.localStorage.getItem("tokenExpirationDate") || 0;
  return tokenExpirationDate < dateNowSeconds();
};

const initialState: UserState = {
  _user: null,
  isAuthenticated: !isSessionExpired(),
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state: UserState, action: PayloadAction<User>): void => {
      state._user = action.payload;
      state.isAuthenticated = true;
    },
    unsetUser: (state: UserState): void => {
      state._user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { setUser, unsetUser } = userSlice.actions;

export default userSlice.reducer;
