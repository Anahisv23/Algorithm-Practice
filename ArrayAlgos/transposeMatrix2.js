const transposeMatrix = (matrix) => {
  const result = [];

  for (let i = 0; i < matrix.length; i++) {
    const curArray = matrix[i];
    let curIdx = 0;
    for (let k = 0; k < curArray.length; k++) {
      const curElem = curArray[k];
      if (i == 0) {
        result.push([curElem]);
      } else if (i >= 1) {
        result[curIdx].push(curElem);
        curIdx += 1;
      }
    }
  }

  return result;
};
