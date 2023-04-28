// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList 
  
    while(currentNode.next){
    if(currentNode.value === currentNode.next.value){
      currentNode.next = currentNode.next.next
    } else {
      currentNode = currentNode.next 
    }
  }
    return linkedList;
  }

  //time complexity: o(n)
  // space complexity: o(1)


// function removeDuplicatesFromLinkedList(linkedList) {
//   let curr = linkedList

//   while(curr.next){
//     // stay at curr to check if we have other duplicates
//     if(curr.value === curr.next.value){
//       curr.next = curr.next.next
//     } else {
//     // if the curr node and the next node dont match lets move on 
//       curr = curr.next
//     }
//   }
//   return linkedList;
// }
  