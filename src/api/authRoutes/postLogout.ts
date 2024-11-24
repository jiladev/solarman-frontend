import { apiInstance } from "../axiosInstance";

export async function postLogout(token: string): Promise<number> {
  const logout = await apiInstance.post("/logout", {}, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { status } = logout;
  return status;
}
