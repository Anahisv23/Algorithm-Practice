const reverseLL = (head) => {
    if (head.val === null) return []
    let currNode = head 
    let prev = null  
  
    while(currNode !== null){
      let next = currNode.next // saving reference to next 
      currNode.next = prev // reverse 
      // currNodes.next needs to to point to prev not currNode.next 
      prev = currNode 
      currNode = next // traversal 
    }
    return prev
  }

  // time: o(n)
  // space: o(n)