import { apiInstance } from "../axiosInstance";

interface RequestBody {
  name: string;
  phone: string;
  fatura_copel: number;
}

interface Estimate {
  client_id: number;
  id: number;
  fatura_copel: number;
  final_value_discount: number;
}

interface ClientEstimateReturn {
  status: number;
  estimate: Estimate;
}

export async function postClientEstimate(
  body: RequestBody
): Promise<ClientEstimateReturn> {
  const request = await apiInstance.post<{ estimate: Estimate }>(
    "/clients/handle-client-estimate",
    body
  );

  const { data, status } = request;
  return {
    status,
    estimate: data.estimate,
  };
}
