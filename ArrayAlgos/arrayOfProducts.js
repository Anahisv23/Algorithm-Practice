const arrayOfProducts = (array) => {
  let resultArray = []
  let product = 1 

  for(let i = 0; i < array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      product *= array[j]
    }
    if(array[i - 1] !== undefined){
      for(let x = i - 1; x >= 0; x--){
        product *= array[x]
      }
    }
      resultArray.push(product)
      product = 1
  }
  return resultArray
}