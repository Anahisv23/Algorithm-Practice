const transposeMatrix = matrix => {
    let transposedArray = []
    
    let columnAmount = matrix[0].length 
    let rowAmount = matrix.length 
  
    for (let i = 0; i < columnAmount; i++){ 
      const arrToAdd = []
      transposedArray.push(arrToAdd)
      for(let j = 0; j < rowAmount; j++){
        let numToAdd = matrix[j][i]
        transposedArray[i].push(numToAdd)
      }
    }
    return transposedArray;
  }
  
  // w means width 
  // h means height 
  // time: o(w * h) we look at all elements in array
  // space: o(w * h) bcs we create new output matrix with the same amount of elements
  // transpose means switching rows to columns and columns to rows 