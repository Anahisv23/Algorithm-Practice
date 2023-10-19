const reverseWords = s => {
    const sIntoArr = s.split(" ") // o(n) time 
    let reversedOrder = [] // o(m) space bcs 

    for (let i = sIntoArr.length - 1; i >= 0; i--){
        let currWord = sIntoArr[i]
        if(currWord !== ""){
            reversedOrder.push(currWord)
        }
    }
    return reversedOrder.join(" ") // o(m) time 
};


// time: o(n + m)
// space: o(m)