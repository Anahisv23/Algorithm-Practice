// simple search
// function searchInSortedMatrix(matrix, target) {
//     for(let i = 0; i < matrix.length; i++){
//       for(let j = 0; j < matrix[i].length; j++){
//         if(matrix[i][j] === target) {
//           return [i, j]
//         }
//       }
//     }
//     return [-1, -1]
//   }
  
//   // time: O(w * h)
//   // space: O(1)

// binary search 
  function binarySearch(array, target, i){
    let left = 0 // 3
    let right = array.length - 1 // 5

    while(left <= right){
      let mid = Math.floor((left + right) / 2) // 

      if(array[mid] === target){
        return [i, mid]
      } else if(array[mid] > target){
        // look left
        right = mid - 1
      } else {
        // look right 
        left = mid + 1
      }
    }
    return -1 
  }

const searchInSortedMatrix = (matrix, target) => {
  for(let i = 0; i < matrix.length; i++){
  let findMatch = binarySearch(matrix[i], target, i)
   if(findMatch === -1){
     continue
     } else {
     return findMatch
     }
   }
  return [-1, -1]
}


// space: o(1)
// time: o(h * log(w)) 