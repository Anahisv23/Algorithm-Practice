const generateDocument = (characters, document) => {
    let hashmap = {}
  
    for (let i = 0; i < characters.length; i++){
      const char = characters[i]
      if(!hashmap[char]){
        hashmap[char] = 1
      } else {
        hashmap[char] ++
      }
    }
  
    for (let j = 0; j < document.length; j++){
      const docChar = document[j]
      if(hashmap[docChar]){
        hashmap[docChar] --
      } else if(hashmap[docChar] == 0 || !hashmap[docChar]){
        return false 
      }
    }
    
    return true;
  }
  
