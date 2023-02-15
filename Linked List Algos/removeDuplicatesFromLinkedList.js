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
  