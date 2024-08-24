import {
  HTTP_METHODS,
  ServerResponsePaginationLinks,
  ServerResponsePaginationMeta,
} from "./server";
import { EnhancedStore } from "@reduxjs/toolkit";
import { UserState } from "../redux/slices/user/user";

export interface ServerResponse {
  data: any;
  links?: ServerResponsePaginationLinks;
  meta?: ServerResponsePaginationMeta;
}

export type MockResponseObject = {
  method: HTTP_METHODS;
  url: string;
  data: ServerResponse;
  status?: number;
};

export type PreloadedStateType =
  | { user: UserState }

export interface CustomRenderOptions {
  preloadedState?: PreloadedStateType;
  store?: EnhancedStore;
}
