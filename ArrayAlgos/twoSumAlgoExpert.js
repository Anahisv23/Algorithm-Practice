/**
 * TWO SUM 
 * Write a function that takes in a non empty array of distinct integers and an integer representing a Target sum.
 *
 * if any two numbers in the input array sum up to the Target sum the function should return them in an array in any order.if no two numbers sum up to the Target sum the function should return an empty array
 *
 * note that the Target sum has to be obtained by summing two different integers in the array you cant add a single integer to itself in order to obtain the target sum
 * 
 * You can assume that there will be at most one pair of numbers summing up to the Target sum
 *

sample input

array = [3, 5, -4, 8, 11, 1, -1, 6]
targetSum = 10 
[11, -1]
 
array: [4, 6],
targetSum: 10
[4, 6]

array: [4, 6, 1, -3],
targetSum: 3
[6, 3]

approach for o(n ^2)
make a func scoped var that wll be an result array that holds the numbers that add up to target sum

make a nested for loop outer loop will look at one specific number in the array 
and the inner loop will look at all other numbers to the right of that one 
  within inner loop check if outerloop elem + inner loop element === target 
    if they do equal to target push those elemnts into result array 
    early return 
    if not then incrmeent inner loop pointer and continue looking for a match and eventualy 
    increment outer loop pointer as well to continue looking 

return result 
 * 
 */

// [3, 5, -4, 8, 11, 1, -1, 6], 10

// const twoSum = (arr, target) => {
//   const result = []

//   for (let i = 0; i < arr.length; i++){
//     let outerLoopElem = arr[i] 
//     for (let j = i + 1; j < arr.length; j++){
//       let innerLoopElem = arr[j] 
//       if(outerLoopElem + innerLoopElem === target){
//         result.push(innerLoopElem, outerLoopElem)
//         return result
//       } 
//     }
//   }
//   return result
// }

// // time: o(n^2)
// // space: o(1) since its storing a fixed (constant) amount of elements 




const twoSum = (arr, target) => {
    const hashmap = {} // o(n) space  bcs this will grow with size of arr
    const result = [] // o(1) constant space will always be two 
  
    for (let i = 0; i < arr.length; i++){
      let currNum = arr[i]
      let comp = target - currNum
  
      if(!hashmap[currNum]){
        hashmap[comp] = currNum
      } else {
        result.push(currNum, hashmap[currNum])
      }
    }
    return result
  }
  
  // time: o(n) bcs number of operation in for loop depend on size of arr 
  // space: o(n) bcs hashmap will grow depending on size of arr
   
  /** approach for hashmap
   * make a function scoped var called hashmap this will store the complement of the current number
   *
   * make a result array that will hold the elems that add up to target
   *
   * make a for loop that will traverse arr
   * will get complement by doing target - currNum 
   *   in the for loop I want to see if hashmap has complement with the hashmap[currNum] if it doesnt lets add its complemennt as a key and value will be currNum
   * if it does have it
   *   result.push(currNum, hashmap[currNum])
   * return result
   *
   *
   * if we never find a match return result 
   */

  // test cases 
  console.log("test 1", twoSum([3, 5, -4, 8, 11, 1, -1, 6], 10)) // [11, -1]
  console.log("test 2", twoSum([4, 6], 10)) // [4, 6]
  console.log("test 3", twoSum([4, 6, 1, -3], 3)) // [6, -3]