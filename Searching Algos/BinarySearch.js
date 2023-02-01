const binarySearch =(array, target) => {
    let left = 0 
    let right = array.length - 1 
    let atLength = 0 
  
    while(atLength <= array.length - 1) {
      let middle = Math.floor((left + right) / 2 ) 
      atLength += 1
      if (array[middle] === target) return middle 
      if (target > array[middle]){
          // change position left
          left = middle + 1
        } else {
            // change position right 
            right = middle - 1
        }
    }
    return -1 
}
// time complexity: o (log (n)) 
// space complexity: o(1)