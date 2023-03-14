// Given a string, write a function to check if it is a palindrome
// return boolean true or false

const isPalindrome = (string) => {
  let turnIntoArray = string.split("");
  let reversed = string.split("").reverse();
  let isPalindrome = false;

  for (let i = 0; i < reversed.length; i++) {
    if (turnIntoArray[i] === reversed[i]) {
      isPalindrome = true;
    } else {
      return isPalindrome;
    }
  }
  return isPalindrome;
};

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// time complexity: o(n)
// space complexity: o(n)
