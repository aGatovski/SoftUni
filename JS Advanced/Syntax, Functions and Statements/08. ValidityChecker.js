function validityChecker(x1,y1,x2,y2){

  let oneToCenter = Number(Math.sqrt(Number(Math.pow(x1,2)  + Math.pow(y1,2))));
  let twoToCenter = Number(Math.sqrt(Number(Math.pow(x2,2)  + Math.pow(y2,2))));
  let oneToTwo = Number(Math.sqrt(Number(Math.pow(x2-x1,2)  + Math.pow(y2-y1,2))));
  

  if(oneToCenter == Math.floor(oneToCenter)){
    console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
  }
  else {
    console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
  }

  if(twoToCenter == Math.floor(twoToCenter)){
    console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
  }
  else {
    console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
  }

  if(oneToTwo == Math.floor(oneToTwo)){
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
  }
  else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
  }



}
validityChecker(3, 0, 0, 4)
validityChecker(2, 1, 1, 1)