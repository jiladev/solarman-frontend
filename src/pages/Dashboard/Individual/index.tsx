import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ReportTable from "../../../components/ReportTable";
import RightsFooter from "../../../components/RightsFooter";
import { getUserDetails } from "../../../api/usersRoutes/getUsers";
import { getReports } from "../../../api/reportsRoutes/getReports";
import { getClients } from "../../../api/clientsRoutes/getClients";
import { AdminContext } from "../../../contexts/adminContext";
import { aggregateReports } from "../../../utils/aggregateObjects";
import * as Styled from "./styles";

interface DataInterface {
  client: {
    name: string;
    phone: string;
  };
  datetime: string;
  originalValue: string;
  discountedValue: string;
}

export default function IndividualDashboard() {
  const { admin } = useContext(AdminContext);

  const navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState<>({});
  const [data, setData] = useState<DataInterface[] | undefined>(undefined);

  async function getData() {
    try {
      const requestUser = await getUserDetails(Number(id), admin.token);
      const reports = await getReports(admin.token);
      const clients = await getClients();

      const filteredReports = reports.filter(report => report.user_id === requestUser.id);

      const data = aggregateReports(clients, filteredReports);

      setData(data);
      setUser(requestUser);
    } catch (err) {
      console.error(err);
    }
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
          <h1> - Colaborador</h1>
        </div>
      </Styled.Content>

      <ReportTable data={data} />
      <RightsFooter />
    </Styled.PageContainer>
  );
}

const dataPreview = [
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
  {
    client: {
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    datetime: "14-09-2024 13:00",
    originalValue: "R$ 100,00",
    discountedValue: "R$ 80,00",
  },
];
