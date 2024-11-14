import { apiInstance } from "../axiosInstance";

export async function postLogout() {
  const logout = await apiInstance.post("/logout");

  const { status } = logout;
  return status;
}
