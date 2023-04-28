const removeGivenNode = (head, givenValue) => {
    let currNode = head
    
    if (currNode.value === null) return null 
    if (currNode.value === givenValue && currNode.next === null) return null // length is 1
    if (currNode.value === givenValue) {
         head = currNode.next
         return head
    } 
  
    while (currNode !== null){
      if (currNode.next.value === givenValue){
        currNode.next = currNode.next.next
      }
      currNode = currNode.next
    }
  
    return head 
  }
  
  // time o(n)
  // space o(1)