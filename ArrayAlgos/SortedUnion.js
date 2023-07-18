const uniteUnique = (...arr) => {
    let result = [] 
    let hashmap = {} 
  
    for (let i = 0; i < arr.length; i++){
      for(let j = 0; j < arr[i].length; j++){
        let curr = arr[i][j] // 1
        if(!hashmap[curr]){
          result.push(curr)
          hashmap[curr] = curr
        } 
      }
    }
    return result;
  }
  
  // time
  // o(n * k)
  // n is number of arrays within outer array 
  // k is number of elements in array 
  
  // space 
  // o(n * k)