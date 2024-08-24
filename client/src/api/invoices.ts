import http from "../utils/http";

export const getInvoiceList = async (params: string): Promise<Response> => {
  return await http.get(`/api/invoices${params}`);
};
export const downloadInvoicePDF = async (id: string): Promise<Response> => {
  return await http.get(`/api/invoices/${id}/pdf`);
};
