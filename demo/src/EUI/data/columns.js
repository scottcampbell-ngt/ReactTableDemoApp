export const COLUMNS = [
  {
    field: "id",
    name: "ID",
    sortable: true,
    // "data-test-subj": "firstNameCell",
    // mobileOptions: {
    //   render: (item) => (
    //     <span>
    //       {item.firstName}{" "}
    //       <EuiLink href="#" target="_blank">
    //         {item.lastName}
    //       </EuiLink>
    //     </span>
    //   ),
    header: false,
    truncateText: false,
    enlarge: true,
    fullWidth: true,
  },
  {
    field: "company_name",
    name: "Company Name",
    truncateText: true,
    sortable: true,
    // render: (name) => (
    //   <EuiLink href="#" target="_blank">
    //     {name}
    //   </EuiLink>
    // ),
    // mobileOptions: {
    //   show: false,
    // },
  },
  {
    field: "account_holder",
    name: "Account Holder",
    sortable: true,
  },
  {
    field: "start_date",
    name: "Start Date",
    dataType: "date",
    sortable: true,
    //render: (date) => formatDate(date, "dobLong"),
  },
  {
    field: "email",
    name: "Email",
    sortable: true,
    // render: (countryCode) => {
    //   const country = store.getCountry(countryCode);
    //   return `${country.flag} ${country.name}`;
    // },
  },
  {
    field: "phone",
    name: "Phone",
    sortable: true,
  },
  {
    field: "city",
    name: "City",
    sortable: true,
  },
  // {
  //   field: "online",
  //   name: "Online",
  //   dataType: "boolean",
  //   render: (online) => {
  //     const color = online ? "success" : "danger";
  //     const label = online ? "Online" : "Offline";
  //     return <EuiHealth color={color}>{label}</EuiHealth>;
  //   },
  // },
];
