// const longestCommonSubsequence = (str1, str2) => {
//   if (str1.length === 0 && str2.length === 0) return "";
//   if (str1.length === 1 && str2.length === 1 && str1 === str2) return str1;
//   if (str1.length === 1 && str2.length === 1 && str1 !== str2) return "";
//   let result = [];
//   // [A, ]

//   for (let i = 0; i < str1.length; i++) {
//     for (let j = i; j < str2.length; j++) {
//         if(str1[i] === str2[j]){
//             result.push(str1[i])
//         }
//     }
//   }

//   return result.join("");
// };

// // console.log(longestCommonSubsequence("", "")); // returns ""
// // console.log(longestCommonSubsequence("A", "B")); // returns ""
// // console.log(longestCommonSubsequence("A", "A")); // returns "a"
// // console.log(longestCommonSubsequence("ABCD", "EFGH")); // returns ""
// console.log(longestCommonSubsequence("ABCD", "ABDC")); // returns "ABD"

// // notes
// // return a string
// // take two strs as inputs
// // make empty array that we will push sequences into and then join("") at the end to make it a str again
// // if both str empty return ""
// // if both str1.length === 1 && str2.length === 1 and str1 === str 2
// // return str1
// // approach
// // nested for loop
// // outer loop stays at str1 A and inner loop loops thru str2 to compare letter in str2 to letter in str1
// // if the elements match push that into result array
