const getDifferentNumber = arr => {
    let hashmap = new Map()
     let max_int = Math.pow(2, 31) -1
    
    for (let j = 0; j < arr.length; j++){
      let curr = arr[j]
      if(!hashmap.has(curr)){
        hashmap.set(curr, curr)
      }
    }
    
    for(let i = 0; i <= max_int; i++){
      if(!hashmap.has(i)){
          return i 
      }
    }
  }
  

  // time complexity: o(n)
  // space complexity: o(n)