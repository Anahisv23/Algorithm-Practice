const expect = (val) => {
  return {
    toBe: (value) => {
      if (val === value) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: (value) => {
      if (val !== value) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};

