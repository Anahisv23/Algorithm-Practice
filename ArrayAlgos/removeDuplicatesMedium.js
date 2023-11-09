const removeDuplicates = (nums) => {
    let k = 0
    let dupeCounter = 0 

    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j] && dupeCounter < 1){
                dupeCounter += 1
            } else if (nums[i] === nums[j] && dupeCounter === 1){
                nums[j] = "_"
                for(let a = j; a < nums.length - 1; a++){
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
    if (nums.length === 0) {
        return 0;
    }

    let k = 0; 

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i]; 
        }
    }
    return k + 1;
};


const nums = [1, 1, 2, 2, 3, 4, 4, 5];
const lengthWithoutDuplicates = removeDuplicates2(nums);


console.log(nums.slice(0, lengthWithoutDuplicates)); // Output: [1, 2, 3, 4, 5]

// time: o(n)
// space: o(1)