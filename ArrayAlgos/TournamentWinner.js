// const keepScore = (hashmap, winningTeam) => {
//     if(!hashmap[winningTeam]){
//       hashmap[winningTeam] = 3
//     } else {
//       hashmap[winningTeam] += 3
//     }
//   return hashmap
//   }
  
//   const tournamentWinner = (competitions, results) => {
//     let hashmap = {}
//     let winner
//     let winnerScore = 0 
    
//     for (let i = 0; i < competitions.length; i++){
//         const currentWinner = results[i] == 0 ? 1 : 0;
//         keepScore(hashmap, competitions[i][currentWinner])
//     }
    
//     for (let key in hashmap) {
//       if(winnerScore < hashmap[key]){
//         winnerScore = hashmap[key]
//         winner = key
//       }
//     }
//     return winner;
//   }

// time complexity: o(n + m)
// space complexity: o(m)
  

  const populateMap = (teamName, scoreBoard, winningTeam, highestScore) => {
    if (!scoreBoard[teamName]) {
       scoreBoard[teamName] = 3;
    } else {
       scoreBoard[teamName] += 3;
    }
 
    if (scoreBoard[teamName] > highestScore) {
       winningTeam = teamName;
       highestScore = scoreBoard[teamName];
    }
 
    return { winningTeam, highestScore };
 }
 
 const tournamentWinner = (competitions, results) => {
   const scoreBoard = {};
   let highestScore = 0;
   let winningTeam = "";
 
   // Populates scoreBoard
   for (let i = 0; i < results.length; i++) {
       if (results[i] === 0) {
         const awayTeam = competitions[i][1];
         ({ winningTeam, highestScore } = populateMap(awayTeam, scoreBoard, winningTeam, highestScore));
       } else {
         const homeTeam = competitions[i][0];
         ({ winningTeam, highestScore } = populateMap(homeTeam, scoreBoard, winningTeam, highestScore));
       }
   }
 
   return winningTeam;
 }
 


// time complexity: o(n)
// space complexity: o(m)