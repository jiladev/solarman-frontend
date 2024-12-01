import { ReportsReturnData } from "../api/reportsRoutes/getReports";
import { DashboardInterface } from "../api/usersRoutes/getUsers";
import { formatPhone, formatDatetime, formatBill } from "./inputFormat";

export interface UserInterface {
  id: number;
  name: string;
  phone: string;
}

export interface ReportsInterface {
  id: number;
  client: UserInterface;
  datetime: string;
  originalValue: string;
  discountedValue: string;
}

export function formatDashboard(dashboardData: DashboardInterface[]) {
  return dashboardData.map((data) => {
    const user = data.user;
    return {
      user: {
        id: user.id,
        name: user.name,
        phone: formatPhone(user.phone),
      },
      numReports: data.numReports,
    };
  });
}

export function formatReports(reports: ReportsReturnData[]) {
  const data: ReportsInterface[] = reports.map((report) => {
    const client = report.client;

    return {
      id: report.id,
      client: {
        id: client.id,
        name: client.name,
        phone: formatPhone(client.phone),
      },
      datetime: formatDatetime(report.datetime),
      originalValue: formatBill(report.originalValue.toFixed(2)),
      discountedValue: formatBill(report.discountedValue.toFixed(2)),
    };
  });

  return data;
}
