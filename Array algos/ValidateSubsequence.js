const isValidSubsequence = (array, sequence) => {
    let pointer = 0
    
    for (let i = 0; i < array.length; i++){
      if(array[i] === sequence[pointer] && pointer < sequence.length){
          pointer += 1
      }
    }
      return pointer === sequence.length
  }
  
  // time complexity: o(n)
  // space complexity: o(1)