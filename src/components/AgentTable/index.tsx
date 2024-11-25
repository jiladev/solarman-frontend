import { useState, useContext } from "react";

import SearchBar from "../SearchBar";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import EmptyItem from "./EmptyItem";
import TableFooter from "./TableFooter";
import Loader from "../Loader";
import { LoaderContext } from "../../contexts/loaderContext";
import { DashboardInterface } from "../../utils/aggregateObjects";
import * as Styled from "./styles";

interface TableProps {
  data: DashboardInterface[];
}

export default function AgentTable(props: TableProps) {
  const { loading } = useContext(LoaderContext);

  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  const maxPages = Math.floor((props.data.length - 1) / 5) + 1;

  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= maxPages) {
      setPage(newPage);
    }
  }
  return (
    <Styled.AgentTable>
      <SearchBar value={search} setValue={setSearch} />
      <TableHeader />
      {loading ? (
        <EmptyItem>
          <Loader />
        </EmptyItem>
      ) : (
        props.data.slice((page - 1) * 5, page * 5).map((item, index) => {
          return <TableItem key={index} data={item} />;
        })
      )}
      <TableFooter
        changePage={changePage}
        currentPage={page}
        endPage={maxPages}
      />
    </Styled.AgentTable>
  );
}
