const rotateArray = (nums, k) => {
    if(nums.length === 1) return nums
    let popCounter = 0 
  
    while(popCounter !== k){
        let popped = nums.pop()
        nums.unshift(popped) 
        popCounter +=1
      }
    return nums 
  }
  
  // time: o(n)
  // space: o(1)