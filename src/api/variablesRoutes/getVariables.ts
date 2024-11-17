import { apiInstance } from "../axiosInstance";

type VariableType = {
  id: number;
  name: string;
  value: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export async function getVariables(
  token: string
): Promise<Pick<VariableType, "id" | "name" | "value">[]> {
  const variables = await apiInstance.get<VariableType[]>("/variables", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data } = variables;
  return data.map((variable) => {
    return {
      id: variable.id,
      name: variable.name,
      value: variable.value,
    };
  });
}
