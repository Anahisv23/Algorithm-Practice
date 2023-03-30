function threeNumberSort(array, order) {
    let idx = 0
    for (let i = 0; i < order.length; i++) {
        for (let j = idx; j < array.length; j++) {
            let elemInArray = array[j]
            let elemInOrder = order[i]
            if (elemInArray === elemInOrder) {
                [array[idx], array[j]] = [elemInArray, array[idx]]
                idx += 1
            }
        }
    }
    return array
}

