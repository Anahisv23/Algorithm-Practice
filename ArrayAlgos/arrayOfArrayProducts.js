const arrayOfProducts = arr => {
    let result = [] 
  
    if(arr.length == 0) return result
    
    for(let i = 0; i < arr.length; i++){
      let product = 1 
      for(let j = 0; j < arr.length; j++){
        if(j === i){
          continue
        } else {
          product *= arr[j]
        }
      }
      result.push(product)
    }
    return result 
  }
  
  // space complexity: o(n)
  // time complexity: o(n^2)

  