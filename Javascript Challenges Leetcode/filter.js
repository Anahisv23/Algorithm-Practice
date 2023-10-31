const filter = (arr, fn) => {
    let filteredArr = []

    for (let i = 0; i < arr.length; i++) {
        let filtered = fn(arr[i], i)

        if (filtered) {
            filteredArr.push(arr[i])
        }
    }
    return filteredArr
};

// time: o(n)
// space: o(n)