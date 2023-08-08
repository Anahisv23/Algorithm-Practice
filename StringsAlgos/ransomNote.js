const ransomNoteFunction = (ransomNote, magazine) => {
    const magMap = {}
  
    for (let i = 0; i < magazine.length; i++) {
      if (magMap[magazine[i]]){
        magMap[magazine[i]] += 1 
      } else {
        magMap[magazine[i]] = 1 
      }
    } 
  
    for (let j = 0; j < ransomNote.length; j++) {
      const currLetter = ransomNote[j] 
      if(!magMap[currLetter]){
        return false 
      } else if(magMap[currLetter] > 0){
        magMap[currLetter] -= 1
      } else if(magMap[currLetter] === 0){
        return false 
      }
    }
    
    return true 
  }
  // time: o(n + m)
  // space:  o(m)