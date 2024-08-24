import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import io from "socket.io-client";
import { REACT_APP_SOCKET_SERVER } from "../../../config";

interface SocketConnectionPayload {
  query: {
    socket_channel: string;
  };
}

export interface SocketState {
  socket: any;
}

const initialState: SocketState = {
  socket: null,
};
/* istanbul ignore next */
export const socketSlice = createSlice({
  name: "socket",
  initialState,
  reducers: {
    connectSocket: (
      state,
      { payload }: PayloadAction<SocketConnectionPayload>
    ): void => {
      state.socket = io(
        REACT_APP_SOCKET_SERVER ?? /* istanbul ignore next */ "",
        {
          query: payload.query,
        }
      );
    },
    disconnectSocket: (state): void => {
      state.socket?.disconnect();
      state.socket = null;
    },
  },
});

export const { connectSocket, disconnectSocket } = socketSlice.actions;

export default socketSlice.reducer;
