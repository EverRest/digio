import http from "../utils/http";

/* istanbul ignore next */
export const getPermissionGroups = async (): Promise<Response> => {
  return await http.get("/api/permissions/groups");
};

/* istanbul ignore next */
export const createRole = async (formData: FormData): Promise<Response> => {
  return await http.post("/api/roles", formData);
};

/* istanbul ignore next */
export const getPermissionCategories = async (): Promise<Response> => {
  return await http.get("/api/permissions/categories");
};
