import { useState } from "react";

import SearchBar from "../SearchBar";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import * as Styled from "./styles";

interface TableProps {
  data:
    | {
        client: {
          id: number;
          name: string;
          phone: string;
        };
        numReports: number;
      }[]
    | undefined;
}

export default function AgentTable(props: TableProps) {
  const [search, setSearch] = useState("");

  return (
    <Styled.AgentTable>
      <SearchBar value={search} setValue={setSearch} />
      <TableHeader />
      {props.data?.map((item, index) => {
        return (
          <TableItem
            key={index}
            client={item.client}
            numReports={item.numReports}
          />
        );
      })}
      <TableFooter currentPage={1} endPage={10} />
    </Styled.AgentTable>
  );
}
