function allSameDigits(a) {
  let isSameDigit = true;
  let firstDigit = a % 10;
  let sumAllDigits=0;

  while (a !== 0) {
    if (a % 10 !== firstDigit) {
      isSameDigit = false;
      
    }
    sumAllDigits += Number(a%10);
    a = Math.floor(a / 10); // Use Math.floor for integer division
    
  }

  console.log(isSameDigit);
  console.log(sumAllDigits);
}

allSameDigits(1234);