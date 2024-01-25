function timeToWalk(steps ,stepLength , velocityInKmH){

  let velocityInMS = Number(velocityInKmH * 1000 / 3600);
  
  let distanceToSchool = Number(steps * stepLength);
  
  let secondsToSchool = Number(distanceToSchool / velocityInMS);
  
  let hoursToSchool=0;
  while(secondsToSchool>3600){
  secondsToSchool-=3600;
  hoursToSchool++;
  
  }
  
  let minutesToSchool=0;
  while(secondsToSchool>60){
    secondsToSchool-=60;
    minutesToSchool++;
  }
  
  minutesToSchool += Math.floor(Number(distanceToSchool/500));
  
  if(hoursToSchool<10){
    console.log(`0${hoursToSchool}:${minutesToSchool}:${Math.round(secondsToSchool)}`)
  }
  
  else {
    console.log(`${hoursToSchool}:${minutesToSchool}:${Math.round(secondsToSchool)}`)
  }
  
  }
  
  timeToWalk(2564, 0.70, 5.5)