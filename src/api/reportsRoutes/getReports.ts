import { apiInstance } from "../axiosInstance";

import { ClientType } from "../clientsRoutes/getClients";

export type ReportType = {
  id: number;
  user_id: number;
  client_id: number;
  consume_kv_coop: number;
  consume_kv_copel: number;
  consume_kv_copel_final: number;
  consume_kv_coop_final: number;
  public_light: number;
  fatura_copel: number;
  min_tax: number;
  fasic_value: number;
  percentage_value: number;
  taxa_tusd: number;
  discount: number;
  final_value_coop: number;
  discount_monthly: number;
  discount_percentage: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  client: Omit<ClientType, "estimates" | "reports">;
};

export async function getReports(): Promise<Omit<ReportType, "client">[]> {
  const reports = await apiInstance.get("/reports");

  const { data } = reports;
  return data;
}

export async function getReportById(id: number): Promise<ReportType> {
  const report = await apiInstance.get(`/reports/${id}`);

  const { data } = report;
  return data;
}
