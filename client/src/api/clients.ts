import { PostClient, UpdateClient } from "../types/fe/client";
import http from "../utils/http";

export const getClientsList = async (params: string): Promise<Response> => {
  return await http.get(`/api/clients${params}`);
};

export const getModules = async (): Promise<Response> => {
  return await http.get("/api/modules");
};

export const postClient = async (payload: PostClient): Promise<Response> => {
  return await http.post("/api/clients", payload);
};

export const updateClient = async (
  id: number,
  data: UpdateClient
): Promise<Response> => {
  return await http.put(`/api/clients/${id}`, data);
};

export const updateClientStatus = async (id: number): Promise<Response> => {
  return await http.patch(`/api/clients/${id}/enable`);
};

export const getClientById = async (clientId: string): Promise<Response> => {
  return await http.get(`/api/clients/${clientId}`);
};
