const singleNumber = nums => {
    let single 

    for (let i = 0; i < nums.length; i++){
        const currNum = nums[i]
        const firstOccurence = nums.indexOf(currNum)
        const lastOccurence = nums.lastIndexOf(currNum)

        if(lastOccurence === firstOccurence){
            single = currNum
        }
    }
    return single
};

/** approach 
o(n^2) time 
o(1) space 

make a number var called single 

findIndex() returns index of first occurence and findLastIndex returns you last occurence of a numer 
so if last occurence is -1 then that is single 

iterate thru array and check each number to see if it has valid values for firstOccurence and 
secondOccurence 

if secondOccurence is === -1 
currNum = single 

return single
*/