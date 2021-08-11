import React, { useMemo, useState, useEffect } from "react";
import SelectedRows from "./SelectedRows";
import {
  useTable,
  useSortBy,
  useFilters,
  useGlobalFilter,
  usePagination,
  useRowSelect,
} from "react-table";
import DATA from "../../data.json";
import { COLUMNS, GROUPED_COLS } from "../data/columns";
import Checkbox from "../hooks/Checkbox";
import "../style/table.css";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    setGlobalFilter,
    selectedFlatRows,
    state,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((columns) => [
        {
          id: "selection",
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <Checkbox {...getToggleAllRowsSelectedProps()} />
          ),
          Cell: ({ row }) => <Checkbox {...row.getToggleRowSelectedProps()} />,
        },
        ...columns,
      ]);
    }
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const [selectedRows, setSelectedRows] = useState([]);

  useEffect(() => {
    setSelectedRows([...selectedFlatRows]);
  }, [selectedFlatRows]);

  return (
    <div>
      <h3>React-Table Table</h3>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((hg) => (
            <tr {...hg.getHeaderGroupProps()}>
              {hg.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <div>{column.canFilter ? column.render("Filter") : null}</div>
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? " ⬇️"
                        : " ⬆️"
                      : ""}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page <strong>{pageIndex + 1}</strong> of{" "}
          <strong>{pageOptions.length}</strong>
        </span>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          {"<<"}
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Prev
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          {">>"}
        </button>
        <p>
          Go to page:{" "}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              gotoPage(page);
            }}
            style={{
              width: "50px",
            }}
          />
        </p>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageOpt) => (
            <option key={pageOpt} value={pageOpt}>
              Display Total: {pageOpt}
            </option>
          ))}
        </select>
      </div>
      <SelectedRows selectedRows={selectedRows} />
    </div>
  );
};

export default Table;
