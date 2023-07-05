function translatePigLatin(str) {
    let arrOfStr = str.split("") // o(n)
    let copyArrOfStr = str.split("") // o(n)
    let consonantCluster = []  
    let foundVowel = false
    const addToEnd = "ay"
  
    const vowels = {
      a: "a",
      e: "e",
      i: "i",
      o: "o",
      u: "u"
    }
  
   if(vowels[arrOfStr[0]]){
      arrOfStr.push("way")
      return arrOfStr.join("")
   }
  
    for(let i = 0; i < copyArrOfStr.length; i++){
      if(!vowels[copyArrOfStr[i]]){
        let letterToAdd = arrOfStr.shift()
        consonantCluster.push(letterToAdd)
      } else if(vowels[copyArrOfStr[i]]){
        foundVowel = true
        arrOfStr.push(consonantCluster.join(""))
        arrOfStr.push(addToEnd)
        return arrOfStr.join("")
      }
    }
  
    if(foundVowel === false) {
      copyArrOfStr.push("ay")
      return copyArrOfStr.join("")
    }
    return arrOfStr.join("");
  }

  // time complexity: o(n)
  // space complexity: o(n)

  // optimized (less code)
  const translatePigLatin = str => {
    let arrOfStr = str.split("") 
    let consonantCluster = []  
    const vowels = ["a", "e", "i", "o", "u"]
  
   if(vowels.includes(arrOfStr[0])){
      arrOfStr.push("way")
      return arrOfStr.join("")
   }
  
  
    for(let i = 0; i < arrOfStr.length; i++){
      if(!vowels.includes(arrOfStr[i])){
        consonantCluster.push(arrOfStr[i])
      } else if(vowels.includes(arrOfStr[i])){
        arrOfStr.push(consonantCluster.join(""))
        arrOfStr.push("ay")
        return arrOfStr.slice(i).join("")
      }
    }
    return arrOfStr.join("") + "ay"
  }
  