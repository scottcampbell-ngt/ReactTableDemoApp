//import { format } from 'date-fns';
import ColumnFilter from '../hooks/ColumnFilter';

export const COLUMNS = [
	{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Company Name',
		Footer: 'Company Name',
		accessor: 'company_name',
		Filter: ColumnFilter,
	},
	{
		Header: 'Account Holder',
		Footer: 'Account Holder',
		accessor: 'account_holder',
		Filter: ColumnFilter,
	},
	{
		Header: 'Email',
		Footer: 'Email',
		accessor: 'email',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Phone',
		Footer: 'Phone',
		accessor: 'phone',
		Filter: ColumnFilter,
		disableFilters: true,
	},
	{
		Header: 'Start',
		Footer: 'Start',
		accessor: 'start_date',
		Filter: ColumnFilter,
		disableFilters: true,
		// Cell: ({ value }) => {
		// 	return format(value, 'dd/MM/yyyy');
		// },
	},
	{
		Header: 'City',
		Footer: 'City',
		accessor: 'city',
		Filter: ColumnFilter,
	},
];

export const GROUPED_COLS = [
	{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id',
	},
	{
		Header: 'Contact',
		Footer: 'Contact',
		columns: [
			{
				Header: 'Company Name',
				Footer: 'Company Name',
				accessor: 'company_name',
			},
			{
				Header: 'Account Holder',
				Footer: 'Account Holder',
				accessor: 'account_holder',
			},
			{
				Header: 'Email',
				Footer: 'Email',
				accessor: 'email',
			},
			{
				Header: 'Phone',
				Footer: 'Phone',
				accessor: 'phone',
			},
		],
	},
	{
		Header: 'Info',
		Footer: 'Info',
		columns: [
			{
				Header: 'Start',
				Footer: 'Start',
				accessor: 'start_date',
			},
			{
				Header: 'City',
				Footer: 'City',
				accessor: 'city',
			},
		],
	},
];
