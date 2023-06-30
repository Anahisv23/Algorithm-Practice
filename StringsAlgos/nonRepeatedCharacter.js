function firstNonRepeatingCharacter(string) {
    let charsRepeated = {}
    if(string.length === 0) return -1
    if(string.length === 1) return 0
  
    for(let i = 0; i < string.length; i++){
      if(!charsRepeated[string[i]]){
        charsRepeated[string[i]] = {
          "frequency": 1,
          "index": i
        }
      } else {
         charsRepeated[string[i]]["frequency"] += 1
         charsRepeated[string[i]]["index"] = i
      }
    }
  
    for(let key in charsRepeated){
      if(charsRepeated.hasOwnProperty(key)){
        if(charsRepeated[key]["frequency"] === 1){
          return charsRepeated[key]["index"]
        }
      }
  }
    
    return -1;
  }

// time o(n + m)
// space o(n)