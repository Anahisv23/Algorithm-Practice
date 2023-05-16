const mergingLinkedList = (head1, head2) => {
    const map = new Map() 
  
    while (head1) {
     map.set(head1.value, head1.value)
     head1 = head1.next
    }
  
    while (head2) {
      if (map.has(head2.value)) return head2
      else {
        head2 = head2.next
      }
    }
    return null
  }

