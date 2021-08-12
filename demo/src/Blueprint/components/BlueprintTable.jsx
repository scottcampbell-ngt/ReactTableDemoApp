import React, { useState } from "react";
import _ from "lodash";
import { Column, Table2, Cell, Utils } from "@blueprintjs/table";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import COLUMNS from "../data/columns";
import DATA from "../../data.json";
import "normalize.css/normalize.css";
import "../style/table.css";

const BlueprintTable = () => {
  console.log("I am Blueprint");
  const [data, setData] = useState(DATA);

  const cellRenderer = (col) => (row) => {
    const rowValue = data[row];
    const value = _.get(rowValue, col, "");
    const cellTheme = row % 2 === 0 ? "lightgrey" : "whitesmoke";

    return value ? (
      <Cell style={{ background: cellTheme }}>{value.toString()}</Cell>
    ) : (
      <Cell>{value}</Cell>
    );
  };

  const renderColumns = COLUMNS.map((col) => (
    <Column
      key={col.key}
      name={col.name}
      cellRenderer={cellRenderer(col.key)}
    />
  ));

  const handleRowsReordered = (oldIndex, newIndex, length) => {
    if (oldIndex === newIndex) return;

    setData([...Utils.reorderArray(data, oldIndex, newIndex, length)]);
  };

  return (
    <div>
      <h3>Blueprint Table</h3>
      <Table2
        enableColumnReordering={true}
        enableColumnResizing={false}
        enableRowReordering={true}
        enableRowResizing={false}
        numRows={data.length}
        onRowsReordered={handleRowsReordered}
      >
        {renderColumns}
      </Table2>
    </div>
  );
};

export default BlueprintTable;
