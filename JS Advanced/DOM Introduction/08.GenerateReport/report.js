function generateReport() {
    let objArr = [];
    let personsInfo={};
    let tableThRef = document.querySelectorAll("table th");
    let checkboxes = document.querySelectorAll("table input[type='checkbox']");
    let tableLinesArr = document.querySelectorAll("tbody tr");
    let textAreaOutputRef = document.getElementById("output");

    
 
    for (const headerBox of checkboxes) {
     if(headerBox.checked){
         personsInfo[headerBox.name] = "";
     }
    }
 
   objArr= fillPersonsInfo(personsInfo,objArr);
   textAreaOutputRef.textContent = JSON.stringify(objArr)
 
 
 function fillPersonsInfo(personsInfo,objArr) {
    for (const line of tableLinesArr) {
        let lineContents = line.textContent.trim().split('\n');
        let arrayOfLineContents = Array.from(lineContents);
       
        let temporalPersonsInfo = {};

        if (personsInfo.hasOwnProperty("employee")) {
            temporalPersonsInfo["employee"] = arrayOfLineContents[0].trim(); 
        }
        if (personsInfo.hasOwnProperty("department")) {
            temporalPersonsInfo["department"] = arrayOfLineContents[1].trim();
        }
        if (personsInfo.hasOwnProperty("status")) {
            temporalPersonsInfo["status"] = arrayOfLineContents[2].trim();
        }
        if (personsInfo.hasOwnProperty("dateHired")) {
            temporalPersonsInfo["dateHired"] = arrayOfLineContents[3].trim();
        }
        if (personsInfo.hasOwnProperty("benefits")) {
            temporalPersonsInfo["benefits"] = arrayOfLineContents[4].trim();
        }
        if (personsInfo.hasOwnProperty("compensation")) {
            temporalPersonsInfo["compensation"] = arrayOfLineContents[5].trim();
        }
        if (personsInfo.hasOwnProperty("rating")) {
            temporalPersonsInfo["rating"] = arrayOfLineContents[6].trim();
        }

        objArr.push(temporalPersonsInfo);
    }
     
    return objArr;
 } 
}
