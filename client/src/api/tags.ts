import http from "../utils/http";

/* istanbul ignore next */
export const getTags = async (params = ""): Promise<Response> => {
    return await http.get(`/tags${params}`);
};