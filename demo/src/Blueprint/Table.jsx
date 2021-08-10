import React from "react";
import _ from "lodash";
import { Column, Table2, Cell } from "@blueprintjs/table";
import "@blueprintjs/core/lib/css/blueprint.css";
// import "@blueprintjs/icons/lib/css/blueprint-icons.css";
// import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";
import "@blueprintjs/table/lib/css/table.css";
import styled from "styled-components";
import COLUMNS from './data/columns';
import DATA from '../data.json';
import "normalize.css/normalize.css";
import "./styles.css";

// const TableDimension = styled.div`
//   width: 600px;
//   height: 600px;
// `;

const BlueprintTable = () => {

    // const StyledCell = styled(Cell)`
    //     background: ${({ highlighted }) => (highlighted ? "lightgrey" : "whitesmoke")};
    // `;

    const cellRenderer = col => row => {
        // const highlighted = (rowIndex + 1) % 2 === 0;
        // return (
        //     <StyledCell highlighted={highlighted}>
        //         Row {rowIndex}, Column {colIndex}
        //     </StyledCell>
        // );
        const rowValue = DATA[row];

        const value = _.get(rowValue, col, "");

        return value ? <Cell>{value.toString()}</Cell> : <Cell>{value}</Cell>
    };

    const cols = COLUMNS.map(col => (
        <Column
            key={col.key}
            name={col.name}
            cellRenderer={cellRenderer(col.key)}
        />
    ))

    return (
        <div>
            <Table2 numRows={200}>
                {cols}
            </Table2>
        </div>
    );
}

export default BlueprintTable;