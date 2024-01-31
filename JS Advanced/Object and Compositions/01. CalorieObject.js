function solve(input){
  let refrigerator={};
  for (let i = 0; i < input.length; i+=2) {
   
    refrigerator[input[i]] = Number(input[i+1])
    
  }
 console.log(refrigerator)
 


}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])