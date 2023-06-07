const majorityElement = (array) => {
    if(array.length === 0) return -1 
  
    let map = {}
    let majority 
    let occurence 
  
    for(let i = 0; i < array.length; i++){
      if(!map[array[i]]){
        map[array[i]] = 1
      } else {
        map[array[i]] += 1
      }
    }
  
    for(let key in map){
      if(map.hasOwnProperty(key)){
        if(!majority && !occurence){
          majority = key  
          occurence = map[key] 
        } else {
          if(occurence < map[key]){
            majority = key
            occurence = map[key]
          }
        }
      }
    }
  
    return majority 
  }
  // space o(n)
  // time o(n + m) 