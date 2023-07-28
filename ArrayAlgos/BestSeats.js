function bestSeats(seats) {
    const len = seats.length 
    if(len < 3) return -1 
    
    let maxCount = 0, zeroCount = 0, bestIndex = -1
    
    for (let i = 1; i < len; i++){
      if(seats[i] === 0){
        zeroCount++
        continue
      }
      if(zeroCount > maxCount){
        maxCount = zeroCount
        console.log("mf", Math.floor(maxCount/2))
        console.log(i)
        console.log("idk", i - Math.floor(maxCount/2))
        bestIndex = i - Math.floor(maxCount/2) - 1
      }
      zeroCount = 0
    }
    return bestIndex
  }
  
  bestSeats([1, 0, 1, 0, 0, 0, 1])