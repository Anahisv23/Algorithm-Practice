const sortColors = (array) => {
    for(let i = 0; i < array.length; i++){
      if(array[i] > array[i + 1]){
       let temp = array[i] 
        array[i] = array[i + 1] 
        array[i + 1] = temp 
        i = -1
      }
      continue
    }
    return array 
  }
  
  console.log('expect: [0,0,1,1,2,2] ', sortColors([2,0,2,1,1,0]))
  console.log('expect: [0, 1, 2] ', sortColors([2,0,1]))
  
  // time: o(n^2)
  // space: o(1)