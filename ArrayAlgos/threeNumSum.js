function threeNumberSum(array, targetSum) {
    let result = []
  
    array.sort((a, b) => a - b)
  
    for(let i = 0; i < array.length; i++){ // i is -8
     let left = i + 1 
     let right = array.length - 1
      while(left < right){
        let currSum = array[i] + array[left] + array[right]
        if(currSum === targetSum) {
          result.push([array[i], array[left], array[right]])
          left +=1 
          right -= 1
        } else if(currSum < targetSum){
          // bcs it sorted if currSum is less than let increase left
          // pointer to see if we can find a number a little bit bigger
          // that would add up to target sum
           left += 1
        } else if(currSum > targetSum){
          right -= 1
          // bcs it sorted if currSum is greater than let decrease right
          // pointer to see if we can find a number a little bit smaller
          // that would add up to target sum
        } 
      }
    }
    return result
  }
  
//   If the current sum is less than the target sum, increment 'left' to explore larger values that might add up to the target sum.
//   If the current sum is greater than the target sum, decrement 'right' to explore smaller values that might add up to the target sum.