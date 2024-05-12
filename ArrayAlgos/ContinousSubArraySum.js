// initial approach

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

// cleaner approach 

const checkSubarraySum2 = (nums, k) => {
    let p1 = 0;
    let p2 = 1;

    while (p1 < nums.length) {
        let sum = nums[p1];
        for (let i = p2; i < nums.length; i++) {
            sum += nums[i];
            if (isMultiplicative(sum, k)) return true;
        }
        p1++;
        p2 = p1 + 1;
    }
    return false;
}


const isMultiplicative2 = (sum, k) => {
    if(sum %  k === 0 ){
        return true
    } else {
        return false 
    }
}
