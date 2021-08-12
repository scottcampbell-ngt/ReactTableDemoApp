const columns = [
  {
    field: "firstName",
    name: "First Name",
    sortable: true,
    "data-test-subj": "firstNameCell",
    mobileOptions: {
      render: (item) => (
        <span>
          {item.firstName}{" "}
          <EuiLink href="#" target="_blank">
            {item.lastName}
          </EuiLink>
        </span>
      ),
      header: false,
      truncateText: false,
      enlarge: true,
      fullWidth: true,
    },
  },
  {
    field: "lastName",
    name: "Last Name",
    truncateText: true,
    render: (name) => (
      <EuiLink href="#" target="_blank">
        {name}
      </EuiLink>
    ),
    mobileOptions: {
      show: false,
    },
  },
  {
    field: "github",
    name: "Github",
  },
  {
    field: "dateOfBirth",
    name: "Date of Birth",
    dataType: "date",
    render: (date) => formatDate(date, "dobLong"),
  },
  {
    field: "nationality",
    name: "Nationality",
    render: (countryCode) => {
      const country = store.getCountry(countryCode);
      return `${country.flag} ${country.name}`;
    },
  },
  {
    field: "online",
    name: "Online",
    dataType: "boolean",
    render: (online) => {
      const color = online ? "success" : "danger";
      const label = online ? "Online" : "Offline";
      return <EuiHealth color={color}>{label}</EuiHealth>;
    },
  },
];
