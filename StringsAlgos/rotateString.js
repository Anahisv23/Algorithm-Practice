const rotateString = (s, goal) => {
    let strIntoArray = s.split("")

    for(let i = 0; i < s.length; i++){
        let letterToShift = strIntoArray.shift()
        strIntoArray.push(letterToShift)
        if(strIntoArray.join("") === goal) return true
    }
    return false
};

// time: o(n) 
// space: o(n) 
