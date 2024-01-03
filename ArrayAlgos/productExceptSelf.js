// less optimal
// time complexity is o(n^2)
// space complexity o(n)

const productExceptSelf = (nums) => {
  const answer = [];

  for (let i = 0; i < nums.length; i++) {
    let productOfRight;
    let productOfLeft;
    let productOfLeftRight;
    if (i === 0) {
      productOfRight = productOfRightElements(nums.slice(i + 1));
      answer.push(productOfRight);
    } else if (i === nums.length - 1) {
      productOfLeft = productOfLeftElements(nums.slice(0, i));
      answer.push(productOfLeft);
    } else {
      productOfRight = productOfRightElements(nums.slice(i + 1));
      productOfLeft = productOfLeftElements(nums.slice(0, i));
      productOfLeftRight = productOfRight * productOfLeft;
      answer.push(productOfLeftRight);
    }
  }
  return answer;
};

const productOfRightElements = (numsToTheRight) => {
  let result = 1;
  for (i = 0; i < numsToTheRight.length; i++) {
    result *= numsToTheRight[i];
  }
  return result;
};

const productOfLeftElements = (numsToTheLeft) => {
  let result = 1;
  for (i = 0; i < numsToTheLeft.length; i++) {
    result *= numsToTheLeft[i];
  }
  return result;
};



// more optimal
// time complexity: o(n)
// space complexity: o(n)

const productExceptSelf2 = (nums) => {
  const prefix = [];

  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      prefix[i] = 1;
    } else {
      prefix[i] = nums[i - 1] * prefix[i - 1];
    }
  }

  const suffix = [];

  for (let i = nums.length - 1; i >= 0; i--) {
    if (i === nums.length - 1) {
      suffix[i] = 1;
    } else {
      suffix[i] = nums[i + 1] * suffix[i + 1];
    }
  }

  const result = [];

  for (let i = 0; i < nums.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
};
