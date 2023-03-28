const groupAnagrams = words => {
  let hashmap = {};

  for (let i = 0; i < words.length; i++) {
    let sortedWord = words[i].split("").sort().join("");
    let actualWord = words[i];
    if (hashmap[sortedWord]) {
      hashmap[sortedWord].push(actualWord);
    } else {
      hashmap[sortedWord] = [actualWord];
    }
  }

  return Object.values(hashmap);
}

// time complexity: o(n log n)
// space complexity: o(n)

console.log(groupAnagrams(["abc", "cba", "bca"]));
