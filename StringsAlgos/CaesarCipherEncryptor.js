function caesarCipherEncryptor(string, key) {
    let res = ""
 
   let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split("")
 
   for(let i = 0; i < string.length; i++){
     let shift = alphabet.indexOf(string[i]) + key
       res += alphabet[shift % 26]
   }
   return res
 }
 
 // time: o(n)
 // space: o(1)

 // modulus explained 
 // when shift is greater than 26 shift will be equal to the the remainder of dividing shift by 26 
 // if its less the shift will remain the value that shift was assigned on line 7 