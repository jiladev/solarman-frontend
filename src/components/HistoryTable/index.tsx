import { useState, useContext, useEffect } from "react";

import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import TableFooter from "./TableFooter";
import EmptyItem from "./EmptyItem";
import SearchBar from "../SearchBar";
import Loader from "../Loader";
import { AdminContext } from "../../contexts/adminContext";
import { LoaderContext } from "../../contexts/loaderContext";
import { revertPhone } from "../../utils/inputFormat";
import { formatReports, ReportsInterface } from "../../utils/objectFormat";
import { getReports } from "../../api/reportsRoutes/getReports";
import * as Styled from "./styles";

interface HistoryTableProps {
  userId?: number;
}

export default function HistoryTable(props: HistoryTableProps) {
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
        userId: props.userId ?? 0,
        page,
        name: "",
        phone: "",
        sort_options: sortOptions,
      };

      if (search) {
        if (/\d/.test(debouncedSearch)) {
          params.phone = revertPhone(debouncedSearch);
        } else {
          params.name = debouncedSearch.trim();
        }
      }

      const reports = await getReports(admin.token, params);
      setData(formatReports(reports.data));
      setMaxPage(Math.ceil(reports.pagination.total / 5));
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);

    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  useEffect(() => {
    setPage(1);
    getData();
  }, [debouncedSearch, sortOptions]);

  useEffect(() => {
    getData();
  }, [page]);

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
        data.map((item, index) => {
          return <TableItem key={index} data={item} getData={getData} />;
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
