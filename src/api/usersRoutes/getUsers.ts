import { apiInstance } from "../axiosInstance";

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export type UserReturn = {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export async function getUsers(): Promise<UserType[]> {
  const users = await apiInstance.get<UserType[]>("/users");

  const { data } = users;
  return data;
}

export async function getUserDetails(
  id: number,
  token: string
): Promise<UserReturn> {
  const user = await apiInstance.get<UserType>(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { data } = user;
  return data;
}