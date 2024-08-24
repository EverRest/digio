import http from "../utils/http";
export const getNews = async (): Promise<Response> => {
    let url = `/news`;
    return await http.get(url);
};