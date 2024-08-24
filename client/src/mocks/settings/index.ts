import { HTTP_METHODS } from "../../types/server";
import { data } from "./data";

export const mockConfiguration = {
  method: HTTP_METHODS.GET,
  url: "configurations",
  data,
  status: 200,
};
