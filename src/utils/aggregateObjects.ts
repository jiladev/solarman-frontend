import { ReportType } from "../api/reportsRoutes/getReports";
import { UserType } from "../api/usersRoutes/getUsers";
import { ClientType } from "../api/clientsRoutes/getClients";
import { formatPhone, formatDatetime, formatBill } from "./inputFormat";

export interface UserInterface {
  id: number;
  name: string;
  phone: string;
}

export interface DashboardInterface {
  user: UserInterface;
  numReports: number;
}

export interface ReportsInterface {
  id: number;
  client: UserInterface;
  datetime: string;
  originalValue: string;
  discountedValue: string;
}

export function aggregateDashboard(
  users: UserType[],
  reports: Omit<ReportType, "client">[]
) {
  const data: DashboardInterface[] = users.map((user) => {
    const userReports = reports.filter((report) => report.user_id === user.id);

    return {
      user: {
        id: user.id,
        name: user.name,
        phone: formatPhone(user.phone),
      },
      numReports: userReports.length,
    };
  });

  return data;
}

export function aggregateReports(
  clients: Omit<ClientType, "estimates" | "reports">[],
  reports: Omit<ReportType, "client">[]
) {
  const data: ReportsInterface[] = reports.map((report) => {
    const client = clients.filter(
      (client) => client.id === report.client_id
    )[0];

    return {
      id: report.id,
      client: {
        id: client.id,
        name: client.name,
        phone: formatPhone(client.phone),
      },
      datetime: formatDatetime(report.created_at),
      originalValue: formatBill(report.fatura_copel.toFixed(2)),
      discountedValue: formatBill(
        (report.fatura_copel - report.discount).toFixed(2)
      ),
    };
  });

  return data;
}
