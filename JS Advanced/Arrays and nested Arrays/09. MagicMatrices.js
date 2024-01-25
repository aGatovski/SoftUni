function solve(input){

  let magical= true;
  let sumRow=0;

  for (let i = 0; i < input.length; i++) {
    sumRow+=Number(input[0][i]);
  }

  for (let i = 0; i < input.length; i++) {

    let currSum=0;

    for (let j = 0; j < input[i].length; j++) {
      
      currSum+=Number(input[i][j]);
      
    }
    
    for (let j = 0; j < input[i].length; j++) {
      
      currSum+=Number(input[j][i]);
    }

    
    if(currSum/2 != sumRow){
      magical=false;
      break;
    }
    
  }

console.log(magical)

}

solve([[4, 5, 6], [6, 5, 4], [5, 5, 5]])