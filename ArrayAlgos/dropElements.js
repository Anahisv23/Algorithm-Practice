function dropElements(arr, func) {
  while (arr.length > 0 && func(arr[0]) === false) {
    arr.shift();
  }
  return arr;
}

// time: o(n)
// space: o(1)





// function dropElements(arr, func) {

//     for(let i = 0; i < arr.length; i++){
//       if(func(arr[0]) === true){
//         return arr
//       } else {
//         arr.shift()
//       }
//     }
//     return arr;
//   }
