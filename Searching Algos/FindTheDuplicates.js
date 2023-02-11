const findDuplicates = (arr1, arr2) => {
    let result = []
    let hashmap = {}
    
    for (let i = 0; i < arr2.length; i++){
      let curr = arr2[i]
      if(!hashmap[curr]){
        hashmap[curr] = curr
      } 
    }
    
    for(let j = 0; j < arr1.length; j++){
      let current = arr1[j]
      if(hashmap[current] == current){
        result.push(current)
      }
    }
    
    return result
  }

  // space complexity: o(n)
  // time complexity: o(n + m)
