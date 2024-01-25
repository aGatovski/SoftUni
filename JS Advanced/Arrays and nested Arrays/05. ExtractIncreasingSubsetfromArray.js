function extractSubset(input){
  let output=[];
  let currIdx=0;
output.push(input[0])
  for (let i = 1; i < input.length; i++) {
    if(input[i]>output[currIdx]){
      output.push(input[i])
      currIdx++;
    }
  }
return output;

}

extractSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])

