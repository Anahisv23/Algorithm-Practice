function moveElementToEnd(array, toMove) {
    let left = 0;
    let right = array.length - 1; 
    while (left < right) {
      if (array[right] !== toMove) {
        if (array[left] === toMove) {
          swap(left, right, array);
        }
        left += 1;
      } else {
        right -= 1;
      }
    }
    return array;
  }
  
  const swap = (left, right, array) => {
    let temp = array[left];  
    array[left] = array[right]; 
    array[right] = temp; 
  };

  // time: o(n)
  // space: o(1)