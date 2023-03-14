// Suppose you have a sorted array of integers with the following values:
// [2, 5, 7, 8, 10, 15, 20, 25]
// What index does the value 8 have in this array if you use binary search?

const findIndex = (array, target) => {
    let left = 0 
    let right = array.length - 1 

    while (left <= right){
        let middle = Math.floor((right + left) / 2)

        if(array[middle] === target){
            return middle
        } else if(array[middle] < target) {
            // look at right 
            left = middle + 1
        } else {
            // look at left 
            right = middle - 1
        }
    }
    return -1 
}

// time complexity: o{log n}
// space complexity: o(n)
console.log("index", findIndex([2, 5, 7, 8, 10, 15, 20, 25], 1))

