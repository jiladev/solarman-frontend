import { useState, useContext, useEffect } from "react";

import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import EmptyItem from "./EmptyItem";
import SearchBar from "../SearchBar";
import Loader from "../Loader";
import { AdminContext } from "../../contexts/adminContext";
import { LoaderContext } from "../../contexts/loaderContext";
import {
  revertPhone,
  revertToDate,
  revertToNumber,
} from "../../utils/inputFormat";
import {
  ReportsInterface,
  aggregateReports,
} from "../../utils/aggregateObjects";
import { getClients } from "../../api/clientsRoutes/getClients";
import { getReports } from "../../api/reportsRoutes/getReports";
import * as Styled from "./styles";

export default function HistoryTable() {
  const { admin } = useContext(AdminContext);
  const { loading, setLoading } = useContext(LoaderContext);

  const [data, setData] = useState<ReportsInterface[]>([]);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState(search);
  const [sortOptions, setSortOptions] = useState([0, 2, 0, 0]);

  async function getData() {
    setLoading(true);

    try {
      const params = {
        page: Math.ceil(page / 2),
        name: "",
        phone: "",
      };

      if (search && /\d/.test(debouncedSearch)) {
        params.phone = revertPhone(debouncedSearch);
      } else {
        params.name = debouncedSearch.trim();
      }

      const clientsData = await getClients(params);
      const reports = await getReports(admin.token);

      const data = aggregateReports(clientsData.data, reports);
      setData(data);
      setMaxPage(Math.ceil(clientsData.total / 5));
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);

    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 3000);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (page % 2 !== 0) {
      getData();
    }
  }, [page]);

  useEffect(() => {
    if (debouncedSearch) {
      getData();
    } else {
      setLoading(false);
    }
  }, [debouncedSearch]);

  useEffect(() => {
    const sortedData = [];
    if (sortOptions[0] !== 0) {
      sortedData.push(
        ...data.sort((a, b) => {
          if (sortOptions[0] === 1) {
            return a.client.name.localeCompare(b.client.name, "pt-BR", {
              sensitivity: "base",
            });
          } else {
            return b.client.name.localeCompare(a.client.name, "pt-BR", {
              sensitivity: "base",
            });
          }
        })
      );
    } else if (sortOptions[1] !== 0) {
      sortedData.push(
        ...data.sort((a, b) => {
          const dateA = revertToDate(a.datetime);
          const dateB = revertToDate(b.datetime);

          if (sortOptions[1] === 1) return dateA.getTime() - dateB.getTime();
          else return dateB.getTime() - dateA.getTime();
        })
      );
    } else if (sortOptions[2] !== 0) {
      sortedData.push(
        ...data.sort((a, b) => {
          const valueA = revertToNumber(a.originalValue);
          const valueB = revertToNumber(b.originalValue);

          if (sortOptions[2] === 1) return valueA - valueB;
          else return valueB - valueA;
        })
      );
    } else if (sortOptions[3] !== 0) {
      sortedData.push(
        ...data.sort((a, b) => {
          const valueA = revertToNumber(a.discountedValue);
          const valueB = revertToNumber(b.discountedValue);

          if (sortOptions[3] === 1) return valueA - valueB;
          else return valueB - valueA;
        })
      );
    }
  }, [data, sortOptions]);

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
      ) : (
        data.slice((page - 1) * 5, page * 5).map((item, index) => {
          return <TableItem key={index} data={item} />;
        })
      )}
      <TableFooter
        changePage={changePage}
        currentPage={page}
        endPage={maxPage}
      />
    </Styled.HistoryTable>
  );
}
