import { apiInstance } from "../axiosInstance";

interface ClientEstimateInterface {
  name: string;
  phone: string;
  fatura_copel: number;
}

export async function postClientEstimate(
  body: ClientEstimateInterface
): Promise<number> {
  const request = await apiInstance.post(
    "/clients/handle-client-estimate",
    body
  );

  const { status } = request;
  return status;
}
