import React, { useState } from 'react';
import Table from './React_Table/components/Table';
import BlueprintTable from './Blueprint/components/Table';

const App = () => {
	const [renderTable, setRenderTable] = useState(true);
	return (
		<div style={{ marginLeft: '25px', marginRight: '25px' }}>
			<button style={{ background: 'tomato', color: 'whitesmoke' }} onClick={() => setRenderTable(!renderTable)}>Toggle Table</button>
			{renderTable ? <Table /> : <BlueprintTable />}
		</div>
	);
};

export default App;
