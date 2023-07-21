// APPROACH 1
const pairElement1 = str => {
    let result = [] 
  
    for (let i = 0; i < str.length; i++){
      result.push(findPair(str[i]))
    }
    return result;
  }
  
  const findPair = char => {
    if(char === "A"){
      return [char, "T"]
    } else if(char === "T"){
      return [char, "A"]
    } else if(char === "C"){
      return [char, "G"]
    } else {
      return [char, "C"]
    }
  }

  // time o(n)
  // space o(n)

  // APPROACH 2 

  const pairElement2 = str => {
  let result = []
  let pairsMap = {
    "A": "T",
    "T": "A",
    "C": "G",
    "G": "C"
  }

  for (let i = 0; i < str.length; i++){
    result.push([str[i], pairsMap[str[i]]])
  }
 
  return result;
}
  // time o(n)
  // space o(n)