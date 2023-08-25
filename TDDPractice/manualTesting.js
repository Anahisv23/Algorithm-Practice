const reverseString = (str) => {
    let reversedString = "";
  
    for(let lastIndex = str.length -1; lastIndex >= 0; lastIndex--) {
      reversedString += str[lastIndex];
    }
  
    return reversedString;
  }
  
  reverseString('StrangerThings');

  // expectations 
  // we expect reverseStr to take a string as an argument 
  // we expect reverseStr to be a function 
  // we expect reverseStr to be a return a string 
  // we expect reverseStr to be a return "sgnihTregnartS"

  // manual testing 
 
  const isFunction = typeof reverseString === "function"
  const string = "StrangerThings"
  const reversed = "sgnihTregnartS"
  const isStr = typeof string === "string"
  const returnStr = typeof reverseString(string) === "string" && reverseString(string) === reversed

  console.log("we expect reverseStr to be a function:", isFunction)
  console.log("we expect string to be a string:", isStr)
  console.log("we expect the return of reverseStr to be a string", returnStr)
  
  