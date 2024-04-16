const merge = (nums1, m, nums2, n) => {
    if(n === 0) return nums1 
    
    let p2 = 0

    for (let i = m; i < nums1.length; i++){
        nums1[i] = nums2[p2]
        p2 += 1 
    }

    nums1.sort((a, b) => a - b)

    return nums1
};
// time: o(m log m)
// space: o(1)