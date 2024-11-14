import { apiInstance } from "../axiosInstance";

type VariableType = {
  id: number;
  name: string;
  value: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export async function getVariables(): Promise<VariableType[]> {
  const variables = await apiInstance.get("/variables");

  const { data } = variables;
  return data;
}
