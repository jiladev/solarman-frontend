import { apiInstance } from "../axiosInstance";

interface UpdateUserInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export async function updateUser(
  body: UpdateUserInterface,
  id: number
): Promise<number> {
  const request = await apiInstance.put(`/users/${id}`, body);

  const { status } = request;
  return status;
}
