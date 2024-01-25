function printNelement(input, indexJump){

  let output=[];

  for (let indexInput = 0, indexOutput=0; indexInput < input.length; indexInput+=indexJump,indexOutput++) {
    output[indexOutput] = input[indexInput];
   
  }
return output;
}
printNelement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)