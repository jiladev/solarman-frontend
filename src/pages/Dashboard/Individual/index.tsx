import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import ReportTable from "../../../components/ReportTable";
import RightsFooter from "../../../components/RightsFooter";
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
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<DataInterface[] | undefined>(undefined);

  useEffect(() => {
    setData(dataPreview);
  });

  return (
    <Styled.PageContainer>
      <Styled.Content>
        <div>
          <Styled.BackButton onClick={() => navigate("/admin/dashboard")}>
            Voltar
          </Styled.BackButton>
          <h1>João da Silva ({id}) - Colaborador</h1>
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
