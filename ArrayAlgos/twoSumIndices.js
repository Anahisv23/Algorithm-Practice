// two sum return the indices of the two elements that add up to target 
const twoSum = (nums, target) => {
    const result = []

    for (let i = 0; i < nums.length; i++){
        for (let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                result.push(i, j)
            }
        }
    }
    return result
};

// Time: o(n^2) bcs for every iteration of the outer loop the inner loop also runs n times so n * n 
// Space: o(n)


const twoSum2 = (nums, target) => {
    let map = {};
  
    for (let i = 0; i < nums.length; i++) {
      let currNum = nums[i];
      let comp = target - currNum;
  
      if (map.hasOwnProperty(comp)) {
        return [map[comp], i];
      } else {
        map[currNum] = i;
      }
    }
  
    return [];
  };

  // Time: o(n)
  // Space: o(n)