function mergeSort(array) {
    // recursive merge sort 
    if(array.length == 1) return array
    const middleIdx = Math.floor(array.length / 2)
    const firstHalf = mergeSort(array.slice(0, middleIdx))
    const secondHalf = mergeSort(array.slice(middleIdx))
  
    return merge(firstHalf, secondHalf)
  }
  
  function merge(arr1, arr2) {
    // merges two sorted arrays into one sorted array
    let result = []
    let i = 0
    let j = 0
    
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        result.push(arr1[i])
        i = i + 1
      } else {
        result.push(arr2[j])
        j = j + 1
      }
    }
  
    // if we still have numbers in left array 
    while(i < arr1.length){
      result.push(arr1[i])
      i++
    }
  
    // if we still have numbers in right array
    while(j < arr2.length){
      result.push(arr2[j])
      j++
    }
    return result
  }