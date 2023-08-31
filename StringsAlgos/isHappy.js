const isHappy = n => {
    let sumOfDigits = n;
  
    while (sumOfDigits !== 1 && sumOfDigits !== 4) {
      let numberString = sumOfDigits.toString();
      sumOfDigits = 0;
  
      for (let digit of numberString) {
        sumOfDigits += parseInt(digit) * parseInt(digit);
      }
    }
  
    return sumOfDigits === 1;
  };

// time: o(log n) bcs time it takes to run algorithm is proportional to the logarithmic of the input size n
// space: o(1)