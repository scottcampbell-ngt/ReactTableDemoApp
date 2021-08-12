import React, { useState } from "react";
import DATA from "../../data.json";
import { COLUMNS } from "../data/columns";
import { createDataStore } from "../utils";
import {
  EuiBasicTable,
  EuiCode,
  EuiLink,
  EuiHealth,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSpacer,
  EuiSwitch,
} from "@elastic/eui";

const store = createDataStore(DATA);

const PaginationTable = () => {
  console.log("i am EUI Pagination Table");

  const allRecords = DATA.length;

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [showPerPageOptions, setShowPerPageOptions] = useState(true);

  const onTableChange = ({ page = {} }) => {
    // const { pageIndex, pageSize } = page;
    const { index, size } = page;

    console.log(page);
    console.log(index, size);

    setPageIndex(index);
    setPageSize(size);
  };

  // const renderStatus = (online) => {
  //   const color = online ? "success" : "danger";
  //   const label = online ? "Online" : "Offline";
  //   return <EuiHealth color={color}>{label}</EuiHealth>;
  // };

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

  const togglePerPageOptions = () => setShowPerPageOptions(!showPerPageOptions);

  const { pageOfItems, totalItemCount } = store.findUsers(pageIndex, pageSize);

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions: [10, 15, 25, allRecords],
    hidePerPageOptions: !showPerPageOptions,
  };

  return (
    <div>
      <EuiBasicTable
        items={pageOfItems}
        columns={COLUMNS}
        pagination={pagination}
        onChange={onTableChange}
        rowProps={getRowProps}
        cellProps={getCellProps}
      />
      <EuiSpacer size="xl" />
      <EuiSwitch
        checked={!showPerPageOptions}
        label={
          showPerPageOptions ? (
            <span>Hide per page options</span>
          ) : (
            <span>Show per page options</span>
          )
        }
        onChange={togglePerPageOptions}
      />
    </div>
  );
};

export default PaginationTable;
