import { apiInstance } from "../axiosInstance";

export async function deleteReportById(id: number, token: string) {
  const request = await apiInstance.delete(`/reports/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { status } = request;
  return status;
}
