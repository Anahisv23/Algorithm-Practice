const quickSort = (array) => {
    quickSortHelper(array, 0, array.length - 1)
    return array
  }

const quickSortHelper = (array, startIdx, endIdx) => {
    if (startIdx >= endIdx) {
      return 
    }
    
    const pivotIdx = startIdx
    let leftIdx = pivotIdx + 1
    let rightIdx = endIdx
    
    while(rightIdx >= leftIdx) {
      if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
        // swap our left and right pointers
        swap(array, leftIdx, rightIdx)
      }
      if (array[leftIdx] <= array[pivotIdx]) {
        // increment left bcs array[left] is where it needs to be with respect to pivot
        leftIdx += 1
      }
      if (array[rightIdx] >= array[pivotIdx]){
        // decrement right bcs array[right] is where it needs to be with respect to pivot
        rightIdx -= 1
      }
    }
      // when we are done with while we want 
      swap(array, pivotIdx, rightIdx)
      
      let leftSubArraySmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
      if (leftSubArraySmaller) {
        // traverse left smaller array first
        quickSortHelper(array, startIdx, rightIdx - 1)
        // then traverse right bigger array second
        quickSortHelper(array, rightIdx + 1, endIdx)
      } else {
        // traverse right smaller array first
        quickSortHelper(array, rightIdx + 1, endIdx)
        // then traverse left bigger array second 
        quickSortHelper(array, startIdx, rightIdx - 1)
      }
  }

  const swap = (array, i, j) => {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }