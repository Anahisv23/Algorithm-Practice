const spinalCase = str => {
    let result = []
    
    const specialChars = " _"
  
    for (let i = 0; i < str.length; i++){
      let curr = str[i] // T
      if(curr === "-"){
        result.push(curr)
      } else if(/^[A-Z]$/.test(curr) && i !== 0){
        // checks if previous char is a letter 
        if(!specialChars.includes(str[i - 1])){
        result.push("-", curr.toLowerCase())
        } else {
          console.log("here")
          result.push(curr.toLowerCase())
        }
      } else if(specialChars.includes(curr)){
        result.push("-")
      } else if(!specialChars.includes(curr)){
        result.push(curr.toLowerCase())
      }
    }
    return result.join("");
  }

  // time: o(n)
  // space: o(n)