import { apiInstance } from "../axiosInstance";

interface VariableInterface {
  value: number;
}

export async function updateVariable(
  body: VariableInterface,
  id: number
): Promise<number> {
  const request = await apiInstance.put(`/variables/${id}`, body);

  const { status } = request;
  return status;
}
