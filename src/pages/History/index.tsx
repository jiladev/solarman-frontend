import { useState, useEffect, useContext } from "react";

import RightsFooter from "../../components/RightsFooter";
import ReportTable from "../../components/ReportTable";
import { ReportsInterface, aggregateReports } from "../../utils/aggregateObjects";
import { getClients } from "../../api/clientsRoutes/getClients";
import { getReports } from "../../api/reportsRoutes/getReports";
import { AdminContext } from "../../contexts/adminContext";
import * as Styled from "./styles";

export default function History() {
  const { admin } = useContext(AdminContext);

  const [data, setData] = useState<ReportsInterface[]>([]);

  async function getData() {
    try {
      const clients = await getClients();
      const reports = await getReports(admin.token);

      const data = aggregateReports(clients, reports);
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }
  
  useEffect(() => {
    getData();
  }, []);

  return (
    <Styled.PageContainer>
      <ReportTable data={data} />
      <RightsFooter />
    </Styled.PageContainer>
  );
}
