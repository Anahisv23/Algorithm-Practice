const isAnagram = (s, t) => {
    let tLetters = {}

    if(s.length !== t.length){
        return false
    }

   for(let i = 0; i < t.length; i++){
       let curr = t[i]
        if(!tLetters[curr]){
            tLetters[curr] = 1
        } else {
            tLetters[curr] ++
        }
    }

    for (let j = 0; j < s.length; j++){
        let curr = s[j]
        if(tLetters[curr] && tLetters[curr] > 0){
            tLetters[curr] --
        } else {
            return false
        }
    }

    return true
};


/**
 time: o(n + m)
 space: o(n)
 
t needs to have the same amount of letters as s to return true 
make a hashmap using the letters from t o(n)
i want to iterate thru s to check if all the letters in s exist in the hashmap which should be populated with 
letter from t o(m)
in that for loop if currLetter isnt in t hashmap then early return and return false 
if we exist for loop return true since we have all the letter we need from the t hashmap 

 */