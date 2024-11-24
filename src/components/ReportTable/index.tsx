import { useState } from "react";

import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import SearchBar from "../SearchBar";
import { ReportsInterface } from "../../utils/aggregateObjects";
import * as Styled from "./styles";

interface TableProps {
  data: ReportsInterface[];
}

export default function ReportTable(props: TableProps) {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const maxPage = Math.floor((props.data.length - 1) / 5) + 1;

  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= maxPage) {
      setPage(newPage);
    }
  }

  return (
    <Styled.HistoryTable>
      <SearchBar value={search} setValue={setSearch} />
      <TableHeader />
      {props.data.slice((page - 1) * 5, page * 5).map((item, index) => {
        return <TableItem key={index} data={item} />;
      })}
      <TableFooter
        changePage={changePage}
        currentPage={page}
        endPage={maxPage}
      />
    </Styled.HistoryTable>
  );
}
