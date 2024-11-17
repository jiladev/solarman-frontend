import { apiInstance } from "../axiosInstance";

interface VariableInterface {
  value: number;
}

export async function updateVariable(
  body: VariableInterface,
  id: number,
  token: string
): Promise<number> {
  const request = await apiInstance.put(`/variables/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { status } = request;
  return status;
}
