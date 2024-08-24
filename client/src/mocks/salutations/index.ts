import { HTTP_METHODS } from "../../types/server";
import { salutations } from "./data";

export const getSalutationsMock = {
  method: HTTP_METHODS.GET,
  url: `salutations`,
  data: {
    data: salutations,
  },
  status: 200,
};
