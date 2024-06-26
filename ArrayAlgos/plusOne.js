const plusOne = (digits) => {
    let result = [1]

    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i] += 1
            return digits
        }
    }
    
    result = [...result, ...digits]

    return result

}

// time: o(n)
// space: o(n)

