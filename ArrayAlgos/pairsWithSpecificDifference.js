function findPairsWithGivenDifference(arr, k) {
    // your code goes here
    let result = []
    
    for(let y = 0; y < arr.length ; y++){
      for(let x = 0; x < arr.length ; x++){
        if(arr[x] - arr[y] === k){
          result.push([arr[x], arr[y]])
        }
      }
    }
  
    return result
 }

 // time complexity: o(n^2)
 // space complexity: o(n)