import { apiInstance } from "../axiosInstance";

interface UpdateUserInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export async function updateUser(
  body: UpdateUserInterface,
  id: number,
  token: string
): Promise<number> {
  const request = await apiInstance.put(`/users/${id}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { status } = request;
  return status;
}
