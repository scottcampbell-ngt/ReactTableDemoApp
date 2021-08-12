export const createDataStore = (data) => {
  //const countries = createCountries();
  const users = data;

  return {
    //countries,
    users,

    findUsers: (pageIndex, pageSize, sortField, sortDirection) => {
      let items;

      if (sortField) {
        // items = users
        //   .slice(0)
        //   .sort(
        //     Comparators.property(sortField, Comparators.default(sortDirection))
        //   );
        items = users;
      } else {
        items = users;
      }

      let pageOfItems;

      if (!pageIndex && !pageSize) {
        pageOfItems = items;
      } else {
        const startIndex = pageIndex * pageSize;
        pageOfItems = items.slice(
          startIndex,
          Math.min(startIndex + pageSize, items.length)
        );
      }

      return {
        pageOfItems,
        totalItemCount: items.length,
      };
    },

    deleteUsers: (...ids) => {
      ids.forEach((id) => {
        const index = users.findIndex((user) => user.id === id);
        if (index >= 0) {
          users.splice(index, 1);
        }
      });
    },

    cloneUser: (id) => {
      const index = users.findIndex((user) => user.id === id);
      if (index >= 0) {
        const user = users[index];
        users.splice(index, 0, { ...user, id: users.length });
      }
    },

    //getCountry: (code) => countries.find((country) => country.code === code),
  };
};
