import React, { useState, useRef } from "react";
import { createDataStore } from "../utils";
import {
  EuiBasicTable,
  EuiHealth,
  EuiIcon,
  EuiLink,
  EuiToolTip,
  EuiFlexGroup,
  EuiFlexItem,
  EuiSwitch,
  EuiSpacer,
  EuiButton,
  EuiCode,
} from "@elastic/eui";

import DATA from "../../data.json";
import { COLUMNS } from "../data/columns";

const store = createDataStore(DATA);

const EUITable = () => {
  console.log("i am EUI Selection Table");

  const [allRecords, setAllRecords] = useState(DATA.length);

  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("id");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedItems, setSelectedItems] = useState([]);
  const tableRef = useRef();

  console.log("i am selected items: ", selectedItems);

  const onTableChange = ({ page = {}, sort = {} }) => {
    // const { index: pageIndex, size: pageSize } = page;
    const { index, size } = page;

    //const { field: sortField, direction: sortDirection } = sort;
    const { field, direction } = sort;

    setPageIndex(index);
    setPageSize(size);
    setSortField(field);
    setSortDirection(direction);
  };

  const onSelectionChange = (selectedItems) => setSelectedItems(selectedItems);

  const renderDeleteButton = () => {
    if (selectedItems.length === 0) return;

    return (
      <EuiButton color="danger" iconType="trash" onClick={onClickDelete}>
        Delete {selectedItems.length} Users
      </EuiButton>
    );
  };

  const onClickDelete = () => {
    store.deleteUsers(...selectedItems.map((user) => user.id));

    setSelectedItems([]);
  };

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

  const sorting = {
    sort: {
      field: sortField,
      direction: sortDirection,
    },
  };

  const { pageOfItems, totalItemCount } = store.findUsers(
    pageIndex,
    pageSize,
    sortField,
    sortDirection
  );

  const pagination = {
    pageIndex,
    pageSize,
    totalItemCount,
    pageSizeOptions: [10, 15, 25, allRecords],
  };

  const deleteButton = renderDeleteButton();

  const selection = {
    selectable: (user) => user,
    // selectableMessage: (selectable) =>
    //   !selectable ? "User is currently offline" : undefined,
    onSelectionChange: onSelectionChange,
    initialSelected: null,
  };

  const onSelection = () => {
    tableRef.current.setSelection(selectedItems);
  };

  return (
    <div>
      <h3>EUI Table</h3>
      <EuiFlexGroup alignItems="center">
        <EuiFlexItem grow={false}>
          <EuiButton onClick={onSelection}>Select online users</EuiButton>
        </EuiFlexItem>
        <EuiFlexItem />
        {deleteButton}
      </EuiFlexGroup>

      <EuiSpacer size="l" />
      <EuiBasicTable
        ref={tableRef}
        items={pageOfItems}
        itemId="id"
        columns={COLUMNS}
        pagination={pagination}
        sorting={sorting}
        isSelectable={true}
        selection={selection}
        onChange={onTableChange}
        rowHeader="id"
      />
    </div>
  );
};

export default EUITable;
