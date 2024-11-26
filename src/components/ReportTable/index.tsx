import { useState, useContext, useEffect } from "react";

import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import EmptyItem from "./EmptyItem";
import SearchBar from "../SearchBar";
import Loader from "../Loader";
import { LoaderContext } from "../../contexts/loaderContext";
import { revertPhone, revertToDate, revertToNumber } from "../../utils/inputFormat";
import { ReportsInterface } from "../../utils/aggregateObjects";
import * as Styled from "./styles";

interface TableProps {
  data: ReportsInterface[];
}

export default function ReportTable(props: TableProps) {
  const { loading } = useContext(LoaderContext);

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filteredData, setFilteredData] = useState<ReportsInterface[]>([]);
  const [sortOptions, setSortOptions] = useState([0, 2, 0, 0]);

  useEffect(() => {
    const sortedData = [];
    if (sortOptions[0] !== 0) {
      sortedData.push(...props.data.sort((a, b) => {
        if (sortOptions[0] === 1) {
          return a.client.name.localeCompare(b.client.name, "pt-BR", { sensitivity: "base" });
        } else {
          return b.client.name.localeCompare(a.client.name, "pt-BR", { sensitivity: "base" })
        }
      }));
    } else if (sortOptions[1] !== 0) {
      sortedData.push(...props.data.sort((a, b) => {
        const dateA = revertToDate(a.datetime);
        const dateB = revertToDate(b.datetime);

        if (sortOptions[1] === 1) return dateA.getTime() - dateB.getTime();
        else return dateB.getTime() - dateA.getTime();
      }));
    } else if (sortOptions[2] !== 0) {
      sortedData.push(...props.data.sort((a, b) => {
        const valueA = revertToNumber(a.originalValue);
        const valueB = revertToNumber(b.originalValue);

        if (sortOptions[2] === 1) return valueA - valueB;
        else return valueB - valueA;
      }));
    } else if (sortOptions[3] !== 0) {
      sortedData.push(...props.data.sort((a, b) => {
        const valueA = revertToNumber(a.discountedValue);
        const valueB = revertToNumber(b.discountedValue);

        if (sortOptions[3] === 1) return valueA - valueB;
        else return valueB - valueA;
      }));
    }

    if (search !== "") {
      const filtered = sortedData.filter((item) => item.client.name.toLowerCase().includes(search) || revertPhone(item.client.phone).includes(search));
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
    <Styled.HistoryTable>
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
    </Styled.HistoryTable>
  );
}
