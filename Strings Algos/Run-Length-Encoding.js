const runLengthEncoding = string => {
    let count = 1; 
    let result = [] 
   
    for (let i = 0; i < string.length; i++) {
      if (string[i + 1] === undefined) {
        result.push(count, string[i])
      } else if (string[i] === string[i + 1] && count !== 9){
        count += 1
      } else {
        let compressedData = `${count}${string[i]}`
        count = 1
        result.push(compressedData)
      }
    }
    return result.join('')
  }

