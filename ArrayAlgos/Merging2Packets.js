function getIndicesOfItemWeights(arr, limit) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    let comp = limit - arr[i];

    if (!map.has(comp)) {
      map.set(arr[i], i);
    } else {
      return [i, map.get(comp)];
    }
  }
  return [];
}

//time complexity: o(n)
// space complexity: o(n)
