//import { format } from 'date-fns';

export const COLUMNS = [
	{
		Header: 'Id',
		Footer: 'Id',
		accessor: 'id',
	},
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
	{
		Header: 'Start',
		Footer: 'Start',
		accessor: 'start_date',
		// Cell: ({ value }) => {
		// 	return format(value, 'dd/MM/yyyy');
		// },
	},
	{
		Header: 'City',
		Footer: 'City',
		accessor: 'city',
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
