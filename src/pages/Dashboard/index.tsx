import { useState, useEffect, useContext } from "react";

import AgentTable from "../../components/AgentTable";
import RightsFooter from "../../components/RightsFooter";
import { LoaderContext } from "../../contexts/loaderContext";
import { AdminContext } from "../../contexts/adminContext";
import { getUsers } from "../../api/usersRoutes/getUsers";
import { getReports } from "../../api/reportsRoutes/getReports";
import {
  DashboardInterface,
  aggregateDashboard,
} from "../../utils/aggregateObjects";
import * as Styled from "./styles";

export default function Dashboard() {
  const { admin } = useContext(AdminContext);
  const { setLoading } = useContext(LoaderContext);

  const [data, setData] = useState<DashboardInterface[]>([]);

  async function getData() {
    setLoading(true);

    try {
      const users = await getUsers(admin.token);
      const reports = await getReports(admin.token);

      const tableData = aggregateDashboard(users, reports);

      setData(tableData);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled.PageContainer>
      <AgentTable data={data} />
      <RightsFooter />
    </Styled.PageContainer>
  );
}
