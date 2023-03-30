// uses bubble sort 
const merge = (nums1, m, nums2, n) => {

    for(let i = 0; i < nums2.length; i++){
        nums1[m] = nums2[i]
        m++ 
    }
    
    for(let j = 0; j < nums1.length; j++){
      if(nums1[j] > nums1[j + 1]){
        //swap
        let temp = nums1[j]
        nums1[j] = nums1[j + 1]
        nums1[j + 1] = temp
        j = -1
      }
    }
    
   
    return nums1
};

// more optimal approach 
// const merge = (nums1, m, nums2, n) => {
//     let i = m - 1;
//     let j = n - 1;
//     let k = m + n - 1;
  
//     while (i >= 0 && j >= 0) {
//       if (nums1[i] > nums2[j]) {
//         nums1[k] = nums1[i];
//         i--;
//       } else {
//         nums1[k] = nums2[j];
//         j--;
//       }
//       k--;
//     }
  
//     while (j >= 0) {
//       nums1[k] = nums2[j];
//       j--;
//       k--;
//     }
  
//     return nums1;
//   };
  

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))