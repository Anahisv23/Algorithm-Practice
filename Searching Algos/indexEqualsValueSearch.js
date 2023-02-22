const indexEqualsValueSearch = arr => {
    let right = arr.length - 1 
    let left = 0
  
    while (left <= right) {
      let mid = Math.floor((right + left) / 2) 
      if(arr[mid] === mid) {
        return mid 
      } else if(arr[mid] < mid){
        left = mid + 1 
      } else {
        right = mid - 1
      }
    }
    return -1
  }

  // time complexity: o(log n)
  // space complexity: o(1)