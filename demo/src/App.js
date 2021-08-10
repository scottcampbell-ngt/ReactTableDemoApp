import React, { useState } from 'react';
import Table from './React_Table/components/Table';
import BlueprintTable from './Blueprint/Table';

const App = () => {
	const [renderTable, setRenderTable] = useState(false);
	return (
		<div>
			{renderTable ? <Table /> : <BlueprintTable />}
		</div>
	);
};

export default App;
