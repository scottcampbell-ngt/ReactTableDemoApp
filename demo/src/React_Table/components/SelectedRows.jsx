import React from 'react';

const SelectedRows = ({ selectedRows }) => {
	return (
		<pre>
			<code>
				{JSON.stringify(
					{
						selectedRows: selectedRows.map((row) => row.original),
					},
					null,
					2
				)}
			</code>
		</pre>
	);
};

export default SelectedRows;
