const presses = string => {
  let numberOfPresses = 0;
  let newstr = string.toUpperCase();
  let hashmap = {
    0: " 0",
    1: "1",
    2: "ABC2",
    3: "DEF3",
    4: "GHI4",
    5: "JKL5",
    6: "MNO6",
    7: "PQRS7",
    8: "TUV8",
    9: "WXYZ9",
  };

  for (let i = 0; i < newstr.length; i++) {
    for (let key in hashmap) {
      if (hashmap.hasOwnProperty(key)) {
        if (hashmap[key].includes(newstr[i])) {
          numberOfPresses += hashmap[key].indexOf(newstr[i]) + 1;
          break;
        }
      }
    }
  }
  return numberOfPresses;
};


// time: o(n^2)
// space: o(1)

presses("THREE3")
