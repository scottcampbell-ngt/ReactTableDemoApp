import React, { useState } from "react";
import Table from "./React_Table/components/Table";
import BlueprintTable from "./Blueprint/components/BlueprintTable";
import SelectionTable from "./EUI/components/SelectionTable";

const App = () => {
  const [renderReactTable, setRenderReactTable] = useState(false);
  const [renderBluePrint, setRenderBluePrint] = useState(false);
  const [renderEUITable, setRenderEUI] = useState(false);

  const setRT = () => {
    setRenderReactTable(true);
    setRenderBluePrint(false);
    setRenderEUI(false);
  };

  const setBP = () => {
    setRenderReactTable(false);
    setRenderBluePrint(true);
    setRenderEUI(false);
  };

  const setEUI = () => {
    setRenderReactTable(false);
    setRenderBluePrint(false);
    setRenderEUI(true);
  };

  return (
    <div style={{ marginLeft: "25px", marginRight: "25px" }}>
      <button
        style={{ background: "tomato", color: "whitesmoke" }}
        onClick={setRT}
      >
        React Table
      </button>
      <button
        style={{ background: "blue", color: "whitesmoke" }}
        onClick={setBP}
      >
        Blueprint Table
      </button>
      <button
        style={{ background: "cyan", color: "whitesmoke" }}
        onClick={setEUI}
      >
        EUI Table
      </button>
      {renderReactTable && <Table />}
      {renderBluePrint && <BlueprintTable />}
      {renderEUITable && <SelectionTable />}
    </div>
  );
};

export default App;
