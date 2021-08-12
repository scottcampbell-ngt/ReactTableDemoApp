import _get from "lodash/get";

const get = (object, path, defaultValue) => _get(object, path, defaultValue);

const ASC = "asc";
const DESC = "desc";

const SortDirection = Object.freeze({
  ASC,
  DESC,
  isAsc(direction) {
    return direction === ASC;
  },
  reverse(direction) {
    return this.isAsc(direction) ? DESC : ASC;
  },
});

export const Comparators = Object.freeze({
  default: (direction = SortDirection.ASC) => {
    return (v1, v2) => {
      const v1IsComparable = v1 != null;
      const v2IsComparable = v2 != null;

      // * 1.
      if (v1IsComparable && !v2IsComparable) {
        return -1;
      }
      if (!v1IsComparable && v2IsComparable) {
        return 1;
      }

      // * 2.
      if (!v1IsComparable && !v2IsComparable) {
        return 0;
      }

      // * 3.
      if (v1 === v2) {
        return 0;
      }
      const result = v1 > v2 ? 1 : -1;

      return SortDirection.isAsc(direction) ? result : -1 * result;
    };
  },

  reverse: (comparator) => {
    return (v1, v2) => comparator(v2, v1);
  },

  value: (valueCallback, comparator) => {
    if (!comparator) comparator = this.default(SortDirection.ASC);

    return (o1, o2) => {
      return comparator(valueCallback(o1), valueCallback(o2));
    };
  },

  property: (prop, comparator) => {
    return Comparators.value((value) => get(value, prop), comparator);
  },
});
