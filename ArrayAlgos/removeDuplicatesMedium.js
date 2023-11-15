const removeDuplicates = (nums) => {
    let k = 0
    let dupeCounter = 0

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j] && dupeCounter < 1) {
                dupeCounter += 1
            } else if (nums[i] === nums[j] && dupeCounter === 1) {
                nums[j] = "_"
                for (let a = j; a < nums.length - 1; a++) {
                    //swap 
                    let temp = nums[a];
                    nums[a] = nums[a + 1];
                    nums[a + 1] = temp;
                }
                j--
            }
        }
        dupeCounter = 0
    }

    const idx = nums.indexOf("_")
    k = idx !== -1 ? idx : nums.length

    return k
};

// time: o(n^2)
// space: o(1)

// optimized 

const removeDuplicates2 = (nums) => {
    if (nums.length <= 2) {
        return nums.length;
    }
    
    let k = 2;
    // Traverse elements through loop...
    // we swap to move non unique elem to the end and increment k number of unique chars at the same time

    // the conditional on line 48 will not increment k counter if
    // curr elem equals the number before or the equal the number before before

    for (let i = 2; i < nums.length; i++) {
        // If the index does not match the (k-1)th and (k-2)th elements, count that element...
        if (nums[i] != nums[k - 2] || nums[i] != nums[k - 1]) {
            nums[k] = nums[i];
            k++;
            // If the index matches the (k-1)th and (k-2)th elements, we skip it...
        }
    }
    return k;       //Return k after placing the final result in the first k slots of nums...
};

// time: o(n)
// space: o(1)