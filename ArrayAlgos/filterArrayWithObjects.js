// Filter an array of objects: Write a function that takes an array of objects and a filter function, and
// returns a new array containing only the objects that pass the filter. For example, if the input array is
// [{name: "Alice", age: 25}, {name: "Bob", age: 30}, {name: "Charlie", age: 35}], and the filter function is (obj) => obj.age > 30,
// the output should be [{name: "Charlie", age: 35}].

const filterArray = (array, func) => {
  return array.filter((object) => {
    return func(object);
  });
};

console.log(
  filterArray(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 35 },
    ],
    (obj) => obj.age > 30
  )
);

// time complexity: o(n)
// space complexity: o(n)

function insertionSort(array) {
  let swapped = false;
  for (let i = 1; i < array.length; i++) {
    let elemBefore = i - 1;
    if (array[elemBefore] > array[i]) {
      let temp = array[elemBefore];
      array[elemBefore] = array[i];
      array[i] = temp;
      swapped = true;
    }
    if (swapped && elemBefore !== 0) {
      swapped = false;
      for (let j = i - 1; j > 0; j--) {
        if (array[j - 1] > array[j]) {
          let temp = array[j - 1];
          array[j - 1] = array[j];
          array[j] = temp;
        }
      }
    }
  }
  return array;
}
