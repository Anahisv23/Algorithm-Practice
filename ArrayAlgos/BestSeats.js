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
        bestIndex = i - Math.floor(maxCount/2) - 1
      }
      zeroCount = 0
    }
    return bestIndex
  }

  const bestSeat = seats => {
    let bestSeatIdx = -1
    let currentSpace = 0
    let bestSpace = 0
    
    for (let i = 0; i < seats.length; i++){
      if(seats[i] === 1){
        currentSpace = 0
      } else {
        currentSpace += 1
        if(currentSpace > bestSpace){
          bestSpace = currentSpace
          bestSeatIdx = i - Math.floor(currentSpace/2)
        }
      }
    }
    return bestSeatIdx
  }
  
  bestSeats([1, 0, 1, 0, 0, 0, 1])