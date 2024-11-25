import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ReportTable from "../../../components/ReportTable";
import RightsFooter from "../../../components/RightsFooter";
import { getUserDetails } from "../../../api/usersRoutes/getUsers";
import { getReports } from "../../../api/reportsRoutes/getReports";
import { getClients } from "../../../api/clientsRoutes/getClients";
import { AdminContext } from "../../../contexts/adminContext";
import { LoaderContext } from "../../../contexts/loaderContext";
import {
  aggregateReports,
  UserInterface,
  ReportsInterface,
} from "../../../utils/aggregateObjects";
import * as Styled from "./styles";

export default function IndividualDashboard() {
  const { admin } = useContext(AdminContext);
  const { setLoading } = useContext(LoaderContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<UserInterface | undefined>(undefined);
  const [data, setData] = useState<ReportsInterface[]>([]);

  async function getData() {
    setLoading(true);

    try {
      const requestUser = await getUserDetails(Number(id), admin.token);
      const reports = await getReports(admin.token);
      const clients = await getClients();

      const filteredReports = reports.filter(
        (report) => report.user_id === requestUser.id
      );

      const data = aggregateReports(clients, filteredReports);

      setData(data);
      setUser({
        id: requestUser.id,
        name: requestUser.name,
        phone: requestUser.phone,
      });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);

  return (
    <Styled.PageContainer>
      <Styled.Content>
        <div>
          <Styled.BackButton onClick={() => navigate("/admin/dashboard")}>
            Voltar
          </Styled.BackButton>
          <h1>{user?.name} - Colaborador</h1>
        </div>
      </Styled.Content>

      <ReportTable data={data} />
      <RightsFooter />
    </Styled.PageContainer>
  );
}
