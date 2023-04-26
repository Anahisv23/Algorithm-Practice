class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
//   exports.LinkedList = LinkedList;
  
  function middleNode(linkedList) {
    // Write your code here.
    let curr = linkedList
    let lengthOfLL = 1
  
    // traverse LL and updates the length variables
    while(curr.next !== null){
        lengthOfLL++
        curr = curr.next
    }
  
    // if we didnt go into while loop before return first node in LL
    if(lengthOfLL === 1) return curr
  
  // reassign curr to be head of LL
    curr = linkedList
  
    // find MiddleIdx of LL
    let middleIdx = Math.floor(lengthOfLL / 2) 
  
    // if middleIdx is even add 1 so we can get the second middle num
    if(middleIdx % 2 === 0) middleIdx + 1
  
    let i = 0 
    let secondMiddleNode  
  
    // traverse linkedList until middleIdx length to find second middle node
    while(i <= middleIdx){
      secondMiddleNode = curr
      curr = curr.next
      i++
    }
    return secondMiddleNode;
  }
  
  
  // time complexity: o(n^2)
  // space complexity: o(1)