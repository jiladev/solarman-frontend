import { apiInstance } from "../axiosInstance";

interface ReportInterface {
  name_client: string,
  phone_client: string;
  consume_kv_copel: number;
  public_light: number;
  fatura_copel: number;
  min_tax: number;
  percentage_value: number;
}

export async function postNewReport(
  body: ReportInterface,
  token: string
): Promise<void> {
  try {
    const response = await apiInstance.post("/reports", body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      responseType: "blob",
    });

    // Converter o arraybuffer para um Blob e criar um link para download
    const blob = new Blob([response.data], { type: "application/pdf" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "report.pdf");
    document.body.appendChild(link);
    link.click();
    link.remove();
  } catch (error) {
    console.error("Erro ao gerar o relatório:", error);
    throw error;
  }
}

