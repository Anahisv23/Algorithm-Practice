const majorityElement = nums => {
    nums.sort((a, b) => a - b);
    let dupeCount = 0;

    if (nums.length === 1) return nums[0];

    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] !== nums[i + 1]) {
            dupeCount = 0
        } else {
            dupeCount++;
        }
        if (dupeCount >= Math.floor(nums.length / 2)) {
            return nums[i];
        }
    }
    return 0;
};
