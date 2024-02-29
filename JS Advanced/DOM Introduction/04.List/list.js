function search() {
    //cities Array
    const citiesArrRef = document.querySelectorAll("li");
 
    //make sure all items are normal
    for (const city of citiesArrRef) {
       city.style.fontWeight = "normal";
       city.style.textDecoration = "none";
    }
 
    //text in search box
    const textInSpan = document.getElementById("searchText").value.toLowerCase();
    
    let matches = 0;
 
    //change all occurrences
    for (let city of citiesArrRef) {
 
     let cityString = city.textContent.toLowerCase();
 
     if(cityString.includes(textInSpan)){
       matches++;
       city.style.fontWeight = "bold";
       city.style.textDecoration = "underline";
 
     }
 
    }
       
    const resultMatches = document.getElementById("result");
    resultMatches.textContent = matches + " matches found";
 }
 