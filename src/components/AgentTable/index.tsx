import { useState, useContext, useEffect } from "react";

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
  const [maxPage, setMaxPage] = useState(Math.ceil(props.data.length / 5));
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<DashboardInterface[]>([]);

  useEffect(() => {
    if (search !== "") {
      const filtered = props.data.filter((item) => item.user.name.toLowerCase().includes(search));
      setFilteredData(filtered);
      setMaxPage(Math.ceil(filtered.length / 5));
    } else {
      setFilteredData(props.data);
      setMaxPage(Math.ceil(props.data.length / 5));
    }
  }, [search])

  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= maxPage) {
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
      ) : ( search !== "" ? (filteredData.slice((page - 1) * 5, page * 5).map((item, index) => {
        return <TableItem key={index} data={item} />;
      })) : (
        props.data.slice((page - 1) * 5, page * 5).map((item, index) => {
          return <TableItem key={index} data={item} />;
        })
      ))}
      <TableFooter
        changePage={changePage}
        currentPage={page}
        endPage={maxPage}
      />
    </Styled.AgentTable>
  );
}
