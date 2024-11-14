import { apiInstance } from "../axiosInstance";

interface LoginInterface {
  email: string;
  password: string;
}

export async function postLogin(body: LoginInterface) {
  const login = await apiInstance.post("/login", body);

  const { data } = login;
  return data;
}
