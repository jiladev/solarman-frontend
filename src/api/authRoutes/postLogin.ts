import { apiInstance } from "../axiosInstance";

interface LoginInterface {
  email: string;
  password: string;
}

type LoggedUserType = {
  status: number;
  user: {
    id: number;
    name: string;
    email: string;
    phone: string;
  };
  token: string;
};

export async function postLogin(body: LoginInterface): Promise<LoggedUserType> {
  const login = await apiInstance.post("/login", body);

  const { data } = login;
  return {
    status: login.status,
    ...data,
  };
}
