import { apiInstance } from "../axiosInstance";

export async function deleteClient(id: number): Promise<number> {
  const request = await apiInstance.delete(`/clients/${id}`);

  const { status } = request;
  return status;
}
