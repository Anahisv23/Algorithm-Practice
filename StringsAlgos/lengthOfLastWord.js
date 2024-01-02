const lengthOfLastWord = s => {
    let lengthOfLastWordCount = 0
    if (s.length === 0) return 0

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " && lengthOfLastWordCount > 0) {
            return lengthOfLastWordCount
        } else if (s[i] !== " ") {
            lengthOfLastWordCount += 1
        }
    }
    return lengthOfLastWordCount
};

// time: 0(n)
// space: o(1)