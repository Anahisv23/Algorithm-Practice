const sortedSquaredArray = array => {
    let result = []
    let leftPointer = 0
    let rightPointer = array.length - 1
  
    for (let i = array.length - 1; i >= 0; i--){
      const left = array[leftPointer] * array[leftPointer]
      const right = array[rightPointer] * array[rightPointer]
        if (right > left){
          result[i] = right
          rightPointer--
       } else {
         result[i] = left
         leftPointer++
      }
    }
    return result;
  }
  
  // time complexity: o(n) bcs we visit each element at least once and 
  // number of operations is dependent on input size
  // space complexity: o(n) bcs this array size is dependent on input size