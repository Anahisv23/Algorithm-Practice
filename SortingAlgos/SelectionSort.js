const selectionSort = array => {
  for (let i = 0; i < array.length; i++) {
    let smallestNum = array[i]
    let idxOfSmall = i
    for (let j = i + 1; j < array.length; j++) {
      if (smallestNum > array[j]) {
        smallestNum = array[j]
        idxOfSmall = j
      }
    }
    [array[i], array[idxOfSmall]] = [array[idxOfSmall], array[i]]
  }
  return array
}

// time complexity: o(n^2)
// space complexity: o(1)