const keepScore = (hashmap, winningTeam) => {
    if(!hashmap[winningTeam]){
      hashmap[winningTeam] = 3
    } else {
      hashmap[winningTeam] += 3
    }
  return hashmap
  }
  
  const tournamentWinner = (competitions, results) => {
    let hashmap = {}
    let winner
    let winnerScore = 0 
    
    for (let i = 0; i < competitions.length; i++){
        const currentWinner = results[i] == 0 ? 1 : 0;
        keepScore(hashmap, competitions[i][currentWinner])
    }
    
    for (let key in hashmap) {
      if(winnerScore < hashmap[key]){
        winnerScore = hashmap[key]
        winner = key
      }
    }
    return winner;
  }
  