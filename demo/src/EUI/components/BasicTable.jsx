import React from "react";
import DATA from "../../data.json";
import { COLUMNS } from "../data/columns";
import { EuiBasicTable, EuiLink, EuiHealth } from "@elastic/eui";

const BasicTable = () => {
  console.log("i am EUI Basic Table");

  const getRowProps = (item) => {
    const { id } = item;
    return {
      "data-test-subj": `row-${id}`,
      className: "customRowClass",
      onClick: () => {},
    };
  };

  const getCellProps = (item, column) => {
    const { id } = item;
    const { field } = column;
    return {
      className: "customCellClass",
      "data-test-subj": `cell-${id}-${field}`,
      textOnly: true,
    };
  };

  return (
    <EuiBasicTable
      items={DATA}
      rowHeader="firstName"
      columns={COLUMNS}
      rowProps={getRowProps}
      cellProps={getCellProps}
    />
  );
};

export default BasicTable;
