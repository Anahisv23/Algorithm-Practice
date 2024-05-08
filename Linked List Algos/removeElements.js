const removeElements = (head, val) => {
    if (head === null) return head;

    let prev = null;
    let currNode = head;

    while (currNode !== null) {
        // If the current node's value matches the target value
        if (currNode.value === val) {
            // If the current node is the head, update head to the next node
            if (prev === null) {
                head = currNode.next;
            } else {
                // Otherwise, remove the current node by updating the previous node's next pointer
                prev.next = currNode.next;
            }
        } else {
            // Update prev to the current node
            prev = currNode;
        }
        // Move to the next node
        currNode = currNode.next;
    }

    // Return the modified head
    return head;
};

const head1 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 6,
      next: {
        value: 3,
        next: {
          value: 4,
          next: {
            value: 5,
            next: {
              value: 6,
              next: null
            }
          }
        }
      }
    }
  }
}

removeElements(head1, 6)