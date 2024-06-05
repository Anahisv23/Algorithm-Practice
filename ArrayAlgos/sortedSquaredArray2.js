const sortedSquaredArray = array => {
    return array.map((curr) => curr * curr).sort((a, b) => a - b)
  }
  
  // time: o(n log n)
  // space: o(n)

  