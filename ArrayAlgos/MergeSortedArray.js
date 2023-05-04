const mergeSortedArray = (nums1, m, nums2, n) => {
  let pointer = 0 
  for(let i = 0; i < nums1.length; i++){
    if(nums1[i] === 0){
      nums1[i] = nums2[pointer]
      pointer += 1
    }
  } // o(m + n)
  console.log("m + n", m + n)
  return nums1.sort((a,b) => a - b) // o (m log m)
  
}

// time: o(m log m)
// space: o(1)