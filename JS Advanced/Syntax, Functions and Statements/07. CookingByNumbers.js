function cookingByNumbers(input , op1,op2, op3, op4 , op5){
  let n = Number(input);
  let options = [op1,op2,op3,op4,op5];
 

  for (let index = 0; index < options.length; index++) {
    
    if(options[index]=='chop'){
      n/=2;
      console.log(n)
    }

    else if(options[index]=='dice'){
     n=Math.sqrt(n);
     console.log(n)
    }
    
    else if(options[index]=='spice'){
      n+=1;
      console.log(n)
    }

    else if(options[index]=='bake'){
      n*=3;
      console.log(n)
    }

    else{
      n-=(20/100)*n
      console.log(n)
    }
  }


}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop')

