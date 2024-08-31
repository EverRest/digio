import http from "../utils/http";
export const getNews = async (): Promise<Response> => {
    const url = `/news`;
    return await http.get(url);
};