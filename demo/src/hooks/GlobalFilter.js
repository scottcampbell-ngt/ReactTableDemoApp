import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

const GlobalFilter = ({ filter, setFilter }) => {
	const [value, setValue] = useState(filter);

	const debounceFilter = useAsyncDebounce((value) => setFilter(value), 300);

	return (
		<span>
			Filter All:{' '}
			<input
				value={value || ''}
				onChange={(e) => {
					setValue(e.target.value);
					debounceFilter(value);
				}}
			/>
		</span>
	);
};

export default GlobalFilter;
