import { useState, useEffect } from "react";

import RightsFooter from "../../components/RightsFooter";
import ReportTable from "../../components/ReportTable";
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

export default function History() {
  const [data, setData] = useState<DataInterface[] | undefined>();
  
  useEffect(() => {
    setData(dataPreview);
  }, []);

  return (
    <Styled.PageContainer>
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
