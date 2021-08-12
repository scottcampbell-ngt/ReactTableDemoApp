import { Comparators } from "./sorting";

export const createDataStore = (data) => {
  return {
    data,

    findUsers: (pageIndex, pageSize, sortField, sortDirection) => {
      let items;

      if (sortField) {
        items = data
          .slice(0)
          .sort(
            Comparators.property(sortField, Comparators.default(sortDirection))
          );
      } else items = data;

      let pageOfItems;

      if (!pageIndex && !pageSize) pageOfItems = items;
      else {
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
        const index = data.findIndex((user) => user.id === id);
        if (index >= 0) {
          data.splice(index, 1);
        }
      });
    },

    cloneUser: (id) => {
      const index = data.findIndex((user) => user.id === id);
      if (index >= 0) {
        const user = data[index];
        data.splice(index, 0, { ...user, id: data.length });
      }
    },
  };
};
