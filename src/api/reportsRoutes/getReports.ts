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

export type ReportsReturnData = {
  id: number;
  client: {
    id: number;
    name: string;
    phone: string;
  };
  datetime: string;
  originalValue: number;
  discountedValue: number;
};

export type ReportsReturn = {
  data: ReportsReturnData[];
  pagination: {
    current_page: number;
    total_pages: number;
    per_page: number;
    total: number;
  };
};

interface ClientsListQueryParams {
  userId: number;
  page: number;
  name: string;
  phone: string;
}

export async function getReports(
  token: string,
  params: ClientsListQueryParams
): Promise<ReportsReturn> {
  const reports = await apiInstance.get<ReportsReturn>(
    `/reports?limit=5&page=${params.page}
    ${params.userId === 0 ? "" : `&user_id=${params.userId}`}
    ${params.name !== "" ? `&name=${params.name}` : ""}${
      params.phone !== "" ? `&phone=${params.phone}` : ""
    }`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const { data } = reports;
  return data;
}

export async function getReportById(
  id: number,
  token: string
): Promise<ReportType> {
  const report = await apiInstance.get<ReportType>(`/reports/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data } = report;
  return data;
}

export async function printReportById(id: number, token: string) {
  try {
    const response = await apiInstance.get(`/reports/generatePdf/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });

    const blob = new Blob([response.data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "report.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Erro ao gerar o relatório:", error);
    throw error;
  }
}
