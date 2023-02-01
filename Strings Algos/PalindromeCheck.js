const isPalindrome = string => {
    let reversed = []
    for (let i = string.length - 1; i >= 0; i--){
      reversed.push(string[i])
    }
    reversed = reversed.join("")
    if(reversed === string){
      return true
    } else {
      return false
    }
  }

  