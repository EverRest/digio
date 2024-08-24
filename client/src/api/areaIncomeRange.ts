import { AreaIncomeRangePayload } from "../types/fe/areaIncomeRange";
import http from "../utils/http";

export const getAreaIncomeRangeList = async (
  params: string
): Promise<Response> => {
  return await http.get(`/api/area-income-ranges${params}`);
};

export const deleteAreaIncomeRange = async (id: string): Promise<Response> => {
  return await http.delete(`/api/area-income-ranges/${id}`);
};

export const getAreaTypes = async (): Promise<Response> => {
  return await http.get(`/api/area-income-ranges/types`);
};

export const createOrUpdateAreaIncomeRange = async (
  payload: AreaIncomeRangePayload,
  id?: string
): Promise<Response> => {
  return !id
    ? await http.post("/api/area-income-ranges", payload)
    : await http.put(`/api/area-income-ranges/${id}`, payload);
};

export const getAreaIncomeRange = async (id: string): Promise<Response> => {
  return await http.get(`/api/area-income-ranges/${id}`);
};
