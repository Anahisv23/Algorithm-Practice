const smallerNumbersThanCurrent = (nums) => {
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let counter = 0;
    let numBeforeIdx = i - 1;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] > nums[j] && nums[i] !== nums[j]) {
        counter += 1;
      }
    }
    if (numBeforeIdx >= 0 && numBeforeIdx !== -1) {
      for (let x = numBeforeIdx; x >= 0; x--) {
        if (nums[x] < nums[i] && nums[x] !== nums[i]) {
          counter += 1;
        }
      }
    }
    result.push(counter);
  }
  return result;
};

// time complexity: o(n^2)
// space complexity: o(n)
