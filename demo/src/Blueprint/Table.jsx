import React from "react";
import _ from "lodash";
import { Column, Table2, Cell } from "@blueprintjs/table";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/table/lib/css/table.css";
import COLUMNS from './data/columns';
import DATA from '../data.json';
import "normalize.css/normalize.css";
import "./styles.css";


const BlueprintTable = () => {

    const cellRenderer = col => (row, rowIndex) => {

        const rowValue = DATA[row];
        const value = _.get(rowValue, col, "");
        const cellTheme = row % 2 === 0 ? "lightgrey" : "whitesmoke";

        return value ? <Cell style={{ background: cellTheme }}>{value.toString()}</Cell> : <Cell>{value}</Cell>
    };

    const renderColumns = COLUMNS.map(col => (
        <Column
            key={col.key}
            name={col.name}
            cellRenderer={cellRenderer(col.key)}
        />
    ))

    return (
        <div>
            <Table2 numRows={DATA.length}>
                {renderColumns}
            </Table2>
        </div>
    );
}

export default BlueprintTable;