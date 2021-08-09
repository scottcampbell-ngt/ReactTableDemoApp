import React, { useMemo } from 'react';
import {
	useTable,
	useSortBy,
	useFilters,
	useGlobalFilter,
	usePagination,
} from 'react-table';
import DATA from '../data.json';
import { COLUMNS, GROUPED_COLS } from './columns';
import GlobalFilter from './GlobalFilter';
//import ColumnFilter from './ColumnFilter';
import './table.css';

const PaginatedTable = () => {
	const columns = useMemo(() => COLUMNS, []);
	const data = useMemo(() => DATA, []);

	// const updateColumns = useMemo(
	// 	() => ({
	// 		Filter: ColumnFilter,
	// 	}),
	// 	[]
	// );

	const {
		getTableProps,
		getTableBodyProps,
		headerGroups,
		prepareRow,
		page,
		nextPage,
		canNextPage,
		previousPage,
		canPreviousPage,
		pageOptions,
		setGlobalFilter,
		state,
	} = useTable(
		{
			columns,
			data,
			// updateColumns,
		},
		useFilters,
		useGlobalFilter,
		useSortBy,
		usePagination
	);

	const { globalFilter, pageIndex } = state;

	return (
		<>
			<GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
			<table {...getTableProps()}>
				<thead>
					{headerGroups.map((hg) => (
						<tr {...hg.getHeaderGroupProps()}>
							{hg.headers.map((column) => (
								<th {...column.getHeaderProps(column.getSortByToggleProps())}>
									{column.render('Header')}
									<div>{column.canFilter ? column.render('Filter') : null}</div>
									<span>
										{column.isSorted
											? column.isSortedDesc
												? ' ⬇️'
												: ' ⬆️'
											: ''}
									</span>
								</th>
							))}
						</tr>
					))}
				</thead>
				<tbody {...getTableBodyProps()}>
					{page.map((row) => {
						prepareRow(row);
						return (
							<tr {...row.getRowProps()}>
								{row.cells.map((cell) => {
									return (
										<td {...cell.getCellProps()}>{cell.render('Cell')}</td>
									);
								})}
							</tr>
						);
					})}
				</tbody>
			</table>
			<div>
				<span>
					Page <strong>{pageIndex + 1}</strong> of{' '}
					<strong>{pageOptions.length}</strong>
				</span>
				<button onClick={() => previousPage()} disabled={!canPreviousPage}>
					Prev
				</button>
				<button onClick={() => nextPage()} disabled={!canNextPage}>
					Next
				</button>
			</div>
		</>
	);
};

export default PaginatedTable;
