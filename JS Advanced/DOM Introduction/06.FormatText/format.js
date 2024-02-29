function solve() {

    const textAreaRef = document.getElementById("input").value;
    const output = document.getElementById("output");
    let sentencesArr = Array.from(textAreaRef.split('.')).filter(sentence => sentence.trim() !== '');;
  
    for (let i = 0; i < sentencesArr.length; i+=3) {
      let p = document.createElement('p');
      let paragraph ='';
      
      if(sentencesArr[i]){
        paragraph+= sentencesArr[i]+ '.';
      }
  
      if(sentencesArr[i+1]){
        paragraph+= sentencesArr[i+1]+ '.';
      }
  
      if(sentencesArr[i+2]){
        paragraph+= sentencesArr[i+2]+ '.';
      }
  
      paragraph+= '<br>';
      p.innerHTML = paragraph;
      output.appendChild(p);
      
      }
  }