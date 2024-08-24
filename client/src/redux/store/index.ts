import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import reducer from "../slices";
import { createLogger } from "redux-logger";
import {
  persistStore,
  REHYDRATE,
  PERSIST,
  REGISTER,
  PURGE,
} from "redux-persist";
import { NODE_ENVIRONMENTS } from "../../constants";

export const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [REHYDRATE, PURGE, PERSIST, REGISTER],
    ignoredPaths: ["socket.socket", "news.news"],
  },
};

const logger = createLogger({ collapsed: true });
/* istanbul ignore next */
export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    switch (process.env.NODE_ENV) {
      case NODE_ENVIRONMENTS.DEVELOPMENT:
        return getDefaultMiddleware(middlewareOptions).concat(logger);
      default:
        return getDefaultMiddleware(middlewareOptions).concat();
    }
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
