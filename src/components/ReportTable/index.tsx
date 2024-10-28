import { useState } from "react";

import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import SearchBar from "../SearchBar";
import * as Styled from "./styles";

interface TableProps {
  data: {
    client: {
      name: string;
      phone: string;
    };
    datetime: string;
    originalValue: string;
    discountedValue: string;
  }[] | undefined;
}

export default function ReportTable(props: TableProps) {
  const [search, setSearch] = useState("");

  return (
    <Styled.HistoryTable>
      <SearchBar value={search} setValue={setSearch} />
      <TableHeader />
      {props.data?.map((item, index) => {
        return (
          <TableItem key={index} client={item.client} datetime={item.datetime} originalValue={item.originalValue} discountedValue={item.discountedValue} />
        )
      })}
      <TableFooter currentPage={1} endPage={10} />
    </Styled.HistoryTable>
  );
}
