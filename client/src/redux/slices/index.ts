import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import user from "./user/user";
import socket from "./socket";
import notification from "./notification";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["socket"],
};

const rootReducer = combineReducers({
  user,
  socket,
  notification,
});

export default persistReducer(persistConfig, rootReducer);
