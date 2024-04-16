const majorityElement = nums => {
  const hashmap = {} 

  for (let i = 0; i < nums.length; i++) {
    if(!hashmap[nums[i]]) hashmap[nums[i]] = 1
    else hashmap[nums[i]] += 1
  } 

  for (let key in hashmap) {
    if(hashmap[key] >= Math.ceil(nums.length / 2) ) return key
  } 
} 

// time: o(n + m)
// space: o(n)