import { useState, useContext, useEffect } from "react";

import SearchBar from "../SearchBar";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import EmptyItem from "./EmptyItem";
import TableFooter from "./TableFooter";
import Loader from "../Loader";
import { LoaderContext } from "../../contexts/loaderContext";
import { revertPhone } from "../../utils/inputFormat"; 
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
  const [sortOptions, setSortOptions] = useState([1, 0]);

  useEffect(() => {
    const sortedData = [];
    if (sortOptions[0] !== 0) {
      sortedData.push(...props.data.sort((a, b) => {
        if (sortOptions[0] === 1) {
          return a.user.name.localeCompare(b.user.name, "pt-BR", { sensitivity: "base" });
        } else {
          return b.user.name.localeCompare(a.user.name, "pt-BR", { sensitivity: "base" })
        }
      }));
    } else if (sortOptions[1] !== 0) {
      sortedData.push(...props.data.sort((a, b) => {
        if (sortOptions[1] === 1) {
          return a.numReports - b.numReports;
        } else {
          return b.numReports - a.numReports;
        }
      }));
    }

    if (search !== "") {
      const filtered = sortedData.filter((item) => item.user.name.toLowerCase().includes(search) || revertPhone(item.user.phone).includes(search));
      setFilteredData(filtered);

      const newMaxPage = Math.ceil(filtered.length / 5);
      if (newMaxPage === 0) setMaxPage(1);
      else setMaxPage(newMaxPage);
    } else {
      setFilteredData(sortedData);

      const newMaxPage = Math.ceil(props.data.length / 5);
      if (newMaxPage === 0) setMaxPage(1);
      else setMaxPage(newMaxPage);
    }
  }, [search, props.data, sortOptions]);

  function changePage(newPage: number) {
    if (newPage >= 1 && newPage <= maxPage) {
      setPage(newPage);
    }
  }
  return (
    <Styled.AgentTable>
      <SearchBar value={search} setValue={setSearch} />
      <TableHeader sortOptions={sortOptions} setSortOptions={setSortOptions} />
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
