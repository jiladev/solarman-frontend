import { ReportType } from "../api/reportsRoutes/getReports";
import { UserType } from "../api/usersRoutes/getUsers";
import { ClientType, EstimateType } from "../api/clientsRoutes/getClients";
import { formatPhone, formatDatetime, formatBill } from "./inputFormat";

export interface DashboardInterface {
  user: {
    id: number;
    name: string;
    phone: string;
  };
  numReports: number;
}

export interface ReportsInterface {
  id: number;
  client: {
    id: number;
    name: string;
    phone: string;
  };
  datetime: string;
  originalValue: string;
  discountedValue: string;
}

export function aggregateDashboard(users: UserType[], reports: Omit<ReportType, "client">[]) {
  const data: DashboardInterface[] = users.map(user => {
    const userReports = reports.filter(report => report.user_id === user.id);

    return {
      user: {
        id: user.id,
        name: user.name,
        phone: formatPhone(user.phone),
      },
      numReports: userReports.length,
    }
  });

  return data;
}

export function aggregateReports (clients: ClientType[]) {
  const reports: ReportType[] = []
  for (let i = 0 ; i < clients.length ; i++) {
    for (let j = 0 ; j < clients[i].reports.length ; j++) {
      reports.push(clients[i].reports[j]);
    }
  }

  const estimates: EstimateType[] = [];
  for (let i = 0 ; i < clients.length ; i++) {
    for (let j = 0 ; j < clients[i].estimates.length ; j++) {
      estimates.push(clients[i].estimates[j]);
    }
  }

  const aggregation = reports.map(report => {
    return {
      id: report.id,
      client: clients.filter(client => client.id === report.client_id)[0],
      datetime: report.created_at,
      originalValue: estimates.filter(estimate => estimate.client_id === report.client_id)[0].fatura_copel,
      discountedValue: estimates.filter(estimate => estimate.client_id === report.client_id)[0].final_value_discount,
    }
  })
} 