const sortingTheSequence = (s) => {
  let swapped = false;
  let sArray = s.split(" ");

  // sorted with insertion sort
  for (let i = 1; i < sArray.length; i++) {
    let idxOfNumBefore = i - 1;
    let curr = sArray[i][sArray[i].length - 1];
    let beforeCurr = sArray[i - 1][sArray[i - 1].length - 1];
    if (curr < beforeCurr) {
      // swap
      swapped = true;
      let temp = sArray[i];
      sArray[i] = sArray[i - 1];
      sArray[i - 1] = temp;
    }

  
    if (swapped && idxOfNumBefore !== 0) {
      swapped = false;
      // start j at i - 1 bcs elements from index 0 thru index i - 1 are in our tentatively sorted arr and need to be checked
      // elems at idx i and after idx i we dont need to look at bcs they are not in our "sorted" array 
      for (let j = i - 1; j > 0; j--) {
        let curr = sArray[j][sArray[j].length - 1];
        let beforecurr = sArray[j - 1][sArray[j - 1].length - 1];
        if (curr < beforecurr) {
          // swap
          let temp = sArray[j];
          sArray[j] = sArray[j - 1];
          sArray[j - 1] = temp;
        }
      }
    }
  }

  return sArray.map((curr) => {
    return curr.slice(0, curr.length - 1)
  }).join(" ")
};

console.log(sortingTheSequence("Myself2 Me1 I4 and3"))
// space o(n)
// time o(n^2)
