import { apiInstance } from "../axiosInstance";

interface NewUserInterface {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export async function postNewUser(body: NewUserInterface): Promise<number> {
  const request = await apiInstance.post("/users", body);

  const { status } = request;
  return status;
}
