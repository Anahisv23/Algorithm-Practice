const checkSubarraySum = (nums, k) =>  {
    let sum = 0
    let count = 1

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(count === 1){
                sum += nums[i] + nums[j]
                count += 1
            } else {
                sum += nums[j]
            }
            const result = isMultiplicative(sum, k)
                if(result === true){
                    return true
                }
        }
        sum = 0
        count = 1
    }
        return false
};

const isMultiplicative = (sum, k) => {
    if(sum %  k === 0 ){
        return true
    } else {
        return false 
    }
}

// time complexity: o(n^2)
// space complexity: o(1)