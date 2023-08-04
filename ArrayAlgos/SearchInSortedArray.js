function searchInSortedMatrix(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
      for(let j = 0; j < matrix[i].length; j++){
        if(matrix[i][j] === target) {
          return [i, j]
        }
      }
    }
    return [-1, -1]
  }
  
  // time: O(w * h)
  // space: O(1)