const stringMatching = words => {
    const result = [] 

    for (let i = 0; i < words.length; i++){
        let currWord = words[i] 
        for(let j = 0; j < words.length; j++){
            let substring = words[j] 
            if (i === j){
                continue
            } else if (currWord.includes(substring) && !result.includes(substring)){
                result.push(substring)
            }
        }
    } 
    // time
    // o(n) for loop i that looks at words 
    // o(n) for loop j that looks through the individal words in words array
    // o(n) looping through result arr that includes substrings 
    // o(m) looping through curr word 
    // o(n^3 * m)
    
    // space 
    // o(n) bcs of result array 
    return result
};