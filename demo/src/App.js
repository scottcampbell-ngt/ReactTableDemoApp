import React, { useState } from 'react';
import Table from './React_Table/components/Table';
import BlueprintTable from './Blueprint/Table';

const App = () => {
	const [renderTable, setRenderTable] = useState(true);
	return (
		<div>
			<button style={{ background: 'tomato', color: 'whitesmoke' }} onClick={() => setRenderTable(!renderTable)}>Switch Table</button>
			{renderTable ? <Table /> : <BlueprintTable />}
		</div>
	);
};

export default App;
