// Problem: Write a script that reads a CSV file containing student grades and calculates the average grade for each student.

// input 
// Name,Math,English,Science
// Alice,85,90,92
// Bob,75,80,85
// Charlie,90,95,88
// " Name,Math,English,Science\nAlice,85,90,92\nBob,75,80,85\nCharlie,90,95,88"

// expected output
// Alice: 89
// Bob: 80
// Charlie: 91


const calculateStudentGrade = (str) => {
    let [subject, alice, bob, charlie] = str.split("\n").map(line => line.split(","))
    let hashmap = {}

    for (let i = 0; i < subject.length; i++){
        if(!hashmap[alice[0]] && !hashmap[bob[i]] && !hashmap[charlie[i]]){
            hashmap[alice[i]] = alice.slice(1, alice.length)
            hashmap[bob[0]] = bob.slice(1, bob.length)
            hashmap[charlie[0]] = charlie.slice(1, charlie.length)
        }
    }

    let result = []
    for (let key in hashmap){
        if(hashmap.hasOwnProperty(key)){
            let sum = 0
            for (let j = 0; j < hashmap[key].length; j++){
                let curr = hashmap[key][j]
                sum += parseInt(curr)
            }
            let average =  sum / hashmap[key].length
            let strToAddToResult = `${key}: ${average}\n`
            result.push(strToAddToResult)
        }
    }
    return result.join("")
}

console.log(calculateStudentGrade("Name,Math,English,Science\nAlice,85,90,92\nBob,75,80,85\nCharlie,90,95,88"))

