const longestCommonPrefix = strs => {
    const prefix = [strs[0]] 

    for (let i = 1; i < strs.length; i++){
        const shortestLen = strs[i].length < prefix[0].length ? strs[i].length : prefix[0].length

            let newPrefix = "" 
            
            for (let j = 0; j < shortestLen; j++){
                if(strs[i][j] === prefix[0][j]){
                    newPrefix += strs[i][j]
                } else if(strs[i][j] !== prefix[0][j]){
                    prefix[0] = newPrefix
                }
       }
         prefix[0] = newPrefix
         newPrefix = ""
    }

    return prefix[0]
};

// time: o(n * m)
// space: o(1)