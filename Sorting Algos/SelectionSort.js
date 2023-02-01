const selectionSort = array => {
    for (let i = 0; i < array.length; i++){
        let smallestNum = array[i]
        let indexOfSmallestNum
      for (let j = i + 1; j < array.length; j++){
          if (smallestNum > array[j]){
            smallestNum = array[j]
            indexOfSmallestNum = j
          }
      }
      const bigger = array[i]
      array[i] = smallestNum
      array[indexOfSmallestNum] = bigger
    }
    return array
  }