const removeElement =  (nums, val) => {
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === val) {
            [nums[i], nums[nums.length - 1]] = [nums[nums.length - 1], nums[i]];
            nums.pop();
        } else {
            i++;
        }
    }
    return nums.length;
}

// time: o(n)
// space: o(1)