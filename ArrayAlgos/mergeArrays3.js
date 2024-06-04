const merge = (nums1, m, nums2, n) => {
    let p2 = 0

    for (let i = m; i < nums1.length; i++){
        nums1[i] = nums2[p2]
        p2 += 1
    } 


    return nums1.sort((a, b) => a - b) 
};

// space: o(1)
// time: The combined length of the array is m + n.
// o((m + n) log (m + n))