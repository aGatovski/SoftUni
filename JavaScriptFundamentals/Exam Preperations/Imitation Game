function Imitate(input)
{
  let specialWord=input.shift();
  let line=input.shift();

  while(line!='Decode'){
    let command= line.split('|');

    if(command[0]=='ChangeAll'){
      while(specialWord.includes(command[1])){
        specialWord=specialWord.replace(command[1],command[2])
      }
    }

    else if(command[0]=='Insert'){
      let index=Number(command[1]);
      specialWord=specialWord.slice(0,index) + command[2] + specialWord.slice(index);
    }
    else if(command[0]=='Move'){
      let firstLetters = specialWord.slice(0,command[1]);
      specialWord=specialWord.replace(firstLetters,'');
      specialWord+=firstLetters;
      
    }

    line=input.shift();
  }
  console.log("The decrypted message is: "  + specialWord)
}
Imitate([

  'zzHe',
  
  'ChangeAll|z|l',
  
  'Insert|2|o',
  
  'Move|3',
  
  'Decode'
  
  ])
