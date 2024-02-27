function solve() {
    debugger
   const resultRef = document.getElementById("result");
  
   let text = document.getElementById("text").value;
   let textArr = text.split(' ');
  
   let namingConvention = document.getElementById("naming-convention").value;
   let result = "";
  
    if(namingConvention === "Camel Case"){
  
     result+= textArr.shift().toLowerCase();
  
      textArr.forEach(element => {
        result+= element[0].toUpperCase() + element.substring(1).toLowerCase();
      });
  
     
      resultRef.textContent = result;
    }
  
    else if(namingConvention === "Pascal Case"){
      textArr.forEach(element => {
        result+= element[0].toUpperCase() + element.substring(1).toLowerCase();
      });
  
      
      resultRef.textContent = result;
    }
  
    else{
      result = "Error!";
      
      resultRef.textContent =result;
      ;
  
    }
  }