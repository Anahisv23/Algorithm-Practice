const map = (arr, fn) => {
    let result = []

    arr.forEach((elem, i) => {
        const resultFromFunction = fn(elem, i)
        result.push(resultFromFunction)
    })
    return result
};

// time o(n) bcs we are looking at every elemnt in arr in the forEach and calling fn for each elem 
// space o(n) bcs we are storing the number of elements related to the input
// this approach does follow functional programming since we are not modifying input

const map2 = (arr, fn) => {

    arr.forEach((elem, i) => {
        const resultFromFunction = fn(elem, i)
        arr[i] = resultFromFunction
    })
    return arr
};

// time o(n) bcs we are looking at every elemnt in arr in the forEach and calling fn for each elem 
// space o(1) bcs no additional data structure was made but its typically recommended we dont modify input 
// ^ this approach doest follow functional programming since we are modifying input 
