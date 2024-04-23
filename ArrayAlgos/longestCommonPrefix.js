const longestCommonPrefix = strs => {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++){
        const shortestLen = strs[i].length < prefix.length ? strs[i].length : prefix.length

            let newPrefix = "" 
            
            for (let j = 0; j < shortestLen; j++){
                if(strs[i][j] === prefix[j]){
                    newPrefix += strs[i][j]
                } else if(strs[i][j] !== prefix[j]){
                    prefix = newPrefix
                }
       }
         prefix = newPrefix
         newPrefix = ""
    }

    return prefix
};

// time: o(n * m)
// space: o(1)

// time: o(n * m)
// space: o(1)