const twoSum = (array, target) => {
  let map = {};

  for (let i = 0; i < array.length; i++) {
    let currNum = array[i];
    let comp = target - currNum;

    if (map[comp]) {
      return [comp, currNum];
    } else {
      map[currNum] = true;
    }
  }

  return [];
};
