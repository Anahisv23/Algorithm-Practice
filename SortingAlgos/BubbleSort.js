const bubbleSort = array => {
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      let temp = array[i]; // 3
      array[i] = array[i + 1]; // 3 = 2
      array[i + 1] = temp; // 2 = 3
      i = -1;
    }
  }
  return array;
};


// [1, 2, 3, 4]