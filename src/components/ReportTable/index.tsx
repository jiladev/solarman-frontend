import { useState, useContext, useEffect } from "react";

import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import EmptyItem from "./EmptyItem";
import SearchBar from "../SearchBar";
import Loader from "../Loader";
import { LoaderContext } from "../../contexts/loaderContext";
import { ReportsInterface } from "../../utils/aggregateObjects";
import * as Styled from "./styles";

interface TableProps {
  data: ReportsInterface[];
}

export default function ReportTable(props: TableProps) {
  const { loading } = useContext(LoaderContext);

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(props.data.length / 5));
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<ReportsInterface[]>([]);

  useEffect(() => {
    if (search !== "") {
      const filtered = props.data.filter((item) => item.client.name.toLowerCase().includes(search));
      setFilteredData(filtered);
      setMaxPage(Math.ceil(filtered.length / 5));
    } else {
      setFilteredData(props.data);
      setMaxPage(Math.ceil(props.data.length / 5));
    }
  }, [search]);

  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= maxPage) {
      setPage(newPage);
    }
  }

  return (
    <Styled.HistoryTable>
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
    </Styled.HistoryTable>
  );
}
