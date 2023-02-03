
const validPalindrome = string => {
    let lowerCasedStr = string.toLowerCase().replace(/[^a-z0-9]/g, "")
    let reversed = []
    
    for (let i = string.length - 1; i >= 0; i--){
      reversed.push(lowerCasedStr[i])
    }
  
    if(lowerCasedStr === reversed.join("")){
      return true
    }
    return false
  }
  