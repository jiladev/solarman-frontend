import { useState, useEffect, useContext } from "react";

import AgentTable from "../../components/AgentTable";
import RightsFooter from "../../components/RightsFooter";
import { LoaderContext } from "../../contexts/loaderContext";
import { AdminContext } from "../../contexts/adminContext";
import { DashboardInterface, getUsers } from "../../api/usersRoutes/getUsers";
import { formatDashboard } from "../../utils/objectFormat";
import * as Styled from "./styles";

export default function Dashboard() {
  const { admin } = useContext(AdminContext);
  const { setLoading } = useContext(LoaderContext);

  const [data, setData] = useState<DashboardInterface[]>([]);

  async function getData() {
    setLoading(true);

    try {
      const users = await getUsers(admin.token);
      setData(formatDashboard(users));
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
