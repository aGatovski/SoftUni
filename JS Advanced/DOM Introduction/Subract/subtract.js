function subtract() {
    const divRef = document.getElementById("result");

    const firstNumberRef =  document.getElementById("firstNumber");
    let firstNumber = Number(firstNumberRef.value);

    const secondNumberRef =  document.getElementById("firstNsecondNumberumber");
    let secondNumber = Number(secondNumberRef.value);

   
   let result = firstNumber - secondNumber;

   divRef.textContent = result ;
  
}