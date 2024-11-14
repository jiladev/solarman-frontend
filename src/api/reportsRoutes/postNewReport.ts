import { apiInstance } from "../axiosInstance";

interface ReportInterface {
  phone_client: string;
  consume_kv_copel: number;
  public_light: number;
  fatura_copel: number;
  min_tax: number;
  percentage_value: number;
}

export async function postNewReport(body: ReportInterface): Promise<number> {
  const request = await apiInstance.post("/reports", body);

  const { status } = request;
  return status;
}
