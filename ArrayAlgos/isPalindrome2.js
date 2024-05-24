const isPalindrome = x => {
    const xString = x.toString() 
    let left = 0 
    let right = xString.length - 1
    let result = false

    while(left < right){
        if(xString[left] === xString[right]){
            left += 1
            right -= 1
            result = true
        } else if(xString[left] !== xString[right]){
            return false 
        }
    } 
    return result
};

// time: o(n)
// space: o(1)