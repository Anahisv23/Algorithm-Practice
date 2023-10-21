function longestPeak(array) {
    let longestPeak = 0; 
    let i = 1;
  
    while (i < array.length - 1) {
      const isPeak = array[i - 1] < array[i] && array[i + 1] < array[i] ? true : false;
      if (isPeak) {
        let leftIdx = i - 2; 
        while (leftIdx >= 0 && array[leftIdx] < array[leftIdx + 1]) {
          leftIdx -= 1;
        }
        let rightIdx = i + 2; 
        while (rightIdx <= array.length && array[rightIdx] < array[rightIdx - 1]) {
          rightIdx += 1;
        }
        const curLongestLength = rightIdx - leftIdx - 1; // 6 - 2 = 4 - 1 = 3
        longestPeak = Math.max(longestPeak, curLongestLength);
        i = rightIdx;
      } else {
        i += 1;
      }
    }
    return longestPeak;
  }