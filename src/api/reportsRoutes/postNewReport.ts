import { AxiosResponse } from "axios";
import { apiInstance } from "../axiosInstance";

import { ReportType } from "./getReports";

interface ReportInterface {
  phone_client: string;
  consume_kv_copel: number;
  public_light: number;
  fatura_copel: number;
  min_tax: number;
  percentage_value: number;
}

export async function postNewReport(
  body: ReportInterface,
  token: string
): Promise<AxiosResponse> {
  const request = await apiInstance.post("/reports", body, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/pdf",
      "Content-Encoding": "binary",
      "Accept-Ranges": "bytes",
      "Content-Disposition": `inline; filename="report.pdf"`,
    },
  });

  return request;
}
