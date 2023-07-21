const myReplace = (str, before, after) => {
    let arrayOfStr = str.split(" ") 
  
    for (let i = 0; i < arrayOfStr.length; i++){
      let currElem = arrayOfStr[i]
      if(currElem === before){
        if(currElem[0] === currElem[0].toUpperCase()){
          let upperCasedLetter = after[0].toUpperCase()
          let afterArray = after.split("") 
          afterArray[0] = upperCasedLetter
          arrayOfStr[i] = afterArray.join("")
        } else {
          let lowerCasedLetter = after[0].toLowerCase()
          let afterArray = after.split("") 
          afterArray[0] = lowerCasedLetter
          arrayOfStr[i] = afterArray.join("")
        }
      } 
    }
  
    return arrayOfStr.join(" ");
  }
  
  // time o(n + a)
  // n representing the length of the arrayOfStr
  // a representing the length of after argument 
  // space o(n + a)
  // n representing arrayOfStr created from splitting input str
  // a representing array created from splitting string after