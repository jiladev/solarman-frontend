import { apiInstance } from "../axiosInstance";

import { ReportType } from "../reportsRoutes/getReports";

export type EstimateType = {
  id: number;
  client_id: number;
  fatura_copel: number;
  final_value_discount: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ClientType = {
  id: number;
  name: string;
  phone: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  estimates: EstimateType[];
  reports: ReportType[];
};

export async function getClients(): Promise<
  Omit<ClientType, "estimates" | "reports">[]
> {
  const clients = await apiInstance.get<
    Omit<ClientType, "estimates" | "reports">[]
  >("/clients");

  const { data } = clients;
  return data;
}

export async function getClientsEstimates(): Promise<ClientType[]> {
  const clients = await apiInstance.get<ClientType[]>("/clients-estimates");

  const { data } = clients;
  return data;
}

export async function getClientById(id: number): Promise<ClientType> {
  const client = await apiInstance.get<ClientType>(`/clients/${id}`);

  const { data } = client;
  return data;
}