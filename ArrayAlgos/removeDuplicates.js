const removeDuplicates = (nums) => {
    let dupeCount = 0
  
      for (let i = 0; i < nums.length; i++){
          for (let j = i + 1; j <= nums.length; j++){
              if(nums[i] === nums[j]){
                  dupeCount += 1
              } else {
                  nums.splice(i, dupeCount)
                  dupeCount = 0
                  break
              }
          }
      }
      return nums.length
  }
  // time: o(n^2)
  // space: o(1)