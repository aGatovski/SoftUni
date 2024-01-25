function rotateArray(array, rotateTimes){
  
  while(rotateTimes!=0){

    let temp = array.pop();
    array.unshift(temp);
   
    rotateTimes--;
  }
  console.log(array.join(' '))

}

rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

)