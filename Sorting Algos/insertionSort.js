function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
      let j = i
      while ( j > 0 && array[j] < array[j - 1]) {
        [array[j], array[j - 1]] = [array[j - 1], array[j]]
        j -= 1
      }
    }
    return array 
  }

  // time complexity: o(n^2)
  // space complexity: o(1)

  