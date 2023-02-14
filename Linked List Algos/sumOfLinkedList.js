class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    let arr1 = []
    let arr2 = []
  
   while (linkedListOne){
      arr1.unshift(linkedListOne.value)
      linkedListOne = linkedListOne.next
    }
  
   while (linkedListTwo){
     arr2.unshift(linkedListTwo.value)
     linkedListTwo = linkedListTwo.next
    }
  
    const str1 = arr1.join("")
    const str2 = arr2.join("")
  
    let sum = parseInt(str1) + parseInt(str2)
    let sumStr = sum.toString()
    let head = new LinkedList(0)
    let currentNode = head 
  
    for (let i = sumStr.length - 1; i >= 0; i--){
      let newNode = new LinkedList(parseInt(sumStr[i]))
      currentNode.next = newNode 
      currentNode = newNode
    }
    
    return head.next;
  }

  // time complexity: o(n + m)
  // n represents length of linkedListOne and m represents the length of linkedListTwo
  // space complexity: o(n + m) 
  // bcs we created two arrays to store the values of the LLs and a new LL to store the sum of those values 