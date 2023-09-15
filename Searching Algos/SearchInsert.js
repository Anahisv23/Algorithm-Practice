// time: o(log n)
// space: o(1)

const searchInsert = (nums, target) => {
    let left = 0 
    let right = nums.length  
  
     while (left <= right){
     let mid = Math.floor((right + left) / 2) 
  
       if(nums[mid] === target){
         return nums.indexOf(nums[mid])
       } else if(nums[mid] < target){
         left = mid + 1 
       } else {
         right = mid - 1
       }
     }
  
    return left
  };