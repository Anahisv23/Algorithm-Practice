const isEmpty = obj => {
    if(obj.length === undefined || obj.hasOwnProperty("length")){
        const keyValPairs = Object.entries(obj)
        if(keyValPairs.length === 0){
            return true
        } else {
            return false 
        }
    } else if(obj.length === 0){
        return true 
    } else {
        return false
    }
};

// less code 
const isEmpty2 = obj => Object.keys(obj).length === 0


// time: o(n) 
// space: o(n) 

/** Approach 

first I want to see if it an array or an object by checking if obj.length

if it equal to undefined its an object 
    convert obj into an array of key value pairs with object.entries to see if its empty or not
    [[], []]
    check if length of array of key value pairs length === 0 return true
    if length of array is > 0 return false 
if its array check 
    if len is 0 return true 
    f len is greater than 0 return false 
 */