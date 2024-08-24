import http from "../utils/http";

export const getSalutations = async (): Promise<Response> => {
  return await http.get("/api/salutations");
};
