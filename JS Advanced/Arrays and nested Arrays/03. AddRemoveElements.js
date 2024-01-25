function addRemove(input){
  let array = [];

  for (let index = 0; index < input.length; index++) {

    if(input[index]=='add'){
        array.push(index+1);
    }

    else{
      array.pop();
    }

  }


  if(array.length==0){
    console.log('Empty')
  }
  
  else array.forEach(el => console.log(el));
  

}
