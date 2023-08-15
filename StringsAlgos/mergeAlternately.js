const mergeAlternatively = (word1, word2) => {
  const merged = []  

  let longest = word1.length > word2.length ? word1 : word2 
  let shortest = word1.length < word2.length ? word1 : word2 

  for (let i = 0; i < shortest.length; i++){
    merged.push(word1[i], word2[i])
  } 

  if (longest !== shortest){
   merged.push(longest.slice(shortest.length))
  }

  return merged.join("")
}
// time: o(n + m)
// space: o(n + m)