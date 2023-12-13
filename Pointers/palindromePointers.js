const isPalindrome = s => {
    const symbols = "`\"(){}[]'\/@_#:-' ',;!.?"
    const lowerCaseS = s.toLowerCase()
    let beginCharIdx = 0
    let endCharIdx = lowerCaseS.length - 1

    while (beginCharIdx <= endCharIdx) {
        const beginChar = lowerCaseS[beginCharIdx]
        const endChar = lowerCaseS[endCharIdx]
        if (beginChar === endChar) {
            beginCharIdx += 1
            endCharIdx -= 1
        } else if (symbols.includes(beginChar)) {
            beginCharIdx += 1
        } else if (symbols.includes(endChar)) {
            endCharIdx -= 1
        } else {
            return false
        }
    }
    return true
};

// time: o(n)
// space: o(n)

// Approach
// make symbols var = "`\"(){}[]'\/@_#:-' ',;!.?"
// then lowercase everything 
// will have two pointers to compare whether the first char is the same as the last     
// character called beginChar and endChar
// while condition is beginChar <= endChar and when beginChar > endChar end loop
// if(beginChar === endChar)
    // increment beginChar and decrement endChar
// else if(beginChar !== endChar)
  // if(symbols.includes(beginChar))
    // increment beginChar index to keep looking
  // if(symbols.includes(endChar))
    // decrement endChar to keep looking
// else return false

// outside while loop 
// return false
