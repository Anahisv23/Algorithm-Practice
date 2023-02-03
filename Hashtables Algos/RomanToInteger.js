const romanToInteger = string => {
    let result = 0
    const hashmap = {
      I: 1, 
      V: 5,
      X: 10, 
      L: 50, 
      C: 100, 
      D: 500,
      M: 1000
    }
  
    for(let i = 0; i < string.length; i++){
      if(hashmap[string[i]] < hashmap[string[i + 1]]){
        result += hashmap[string[i + 1]] - hashmap[string[i]] 
        i = i + 1 
      } else {
        result += hashmap[string[i]]
      }
    }
    return result 
  }

// time complexity: o(n) linear runtime 
// space complexity: o(1) constant space 