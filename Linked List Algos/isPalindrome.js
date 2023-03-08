const isPalindrome = head => {
    let stack = []
    let curr = head

    if (head.next == null || !head) return true

    while (curr !== null) {
        stack.push(curr.val)
        curr = curr.next
    }

    curr = head

    while (curr) {
        if (curr.val === stack.pop()) {
            curr = curr.next
        } else {
            return false
        }
    }
    return true

}

// space complexity: o(n)
// time complexity: o(n)

