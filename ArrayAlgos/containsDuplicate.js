// more optimal
const containsNearbyDuplicate = (nums, k) => {
  const hashmap = {};

  for (let i = 0; i < nums.length; i++) {
    if (hashmap[nums[i]] === undefined) {
      hashmap[nums[i]] = i;
    } else if (Math.abs(hashmap[nums[i]] - i) <= k) {
      return true;
    } else {
      hashmap[nums[i]] = i;
    }
  }
  return false;
};

// time: o(n)
// space: o(n)

// less optimal
//const containsNearbyDuplicate = (nums, k) => {
//     for(let i = 0; i < nums.length; i++){
//         for(let j = i + 1; j < nums.length; j++){
//             if(nums[i] === nums[j]){
//                 if(Math.abs(i - j) <= k){
//                     return true
//                 }
//             }
//         }
//     }
//     return false
// };

// time: O(n^2)
// space: o(1)