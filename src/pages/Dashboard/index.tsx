import { useState, useEffect } from "react";

import AgentTable from "../../components/AgentTable";
import RightsFooter from "../../components/RightsFooter";
import * as Styled from "./styles";

interface DataInterface {
  client: {
    id: number;
    name: string;
    phone: string;
  };
  numReports: number;
}

export default function Dashboard() {
  const [data, setData] = useState<DataInterface[] | undefined>(undefined);

  useEffect(() => {
    setData(dataPreview);
  }, []);

  return (
    <Styled.PageContainer>
      <AgentTable data={data} />
      <RightsFooter />
    </Styled.PageContainer>
  );
}

const dataPreview = [
  {
    client: {
      id: 1,
      name: "João da Silva",
      phone: "(12) 9 3456-7890",
    },
    numReports: 10,
  },
  {
    client: {
      id: 2,
      name: "John Doe",
      phone: "(12) 9 3456-7890",
    },
    numReports: 0,
  },
];
