
function roadRadar(speed, area){

  const motorway = 130;
    const interstate = 90;
    const city = 50;
    const residential = 20;

  function isWithinLimit(speed,area){

    if(area=='motorway'){
      return (speed - motorway<0 ? true : false);
    }
  
    else if(area == 'interstate'){
      return (speed - interstate<0 ? true : false);
    }
  
    else if(area == 'residential'){
      return (speed - residential<0 ? true : false);
    }
  
    else{
      return (speed - city<0 ? true : false);
    }
  
  }
  
let status;
let difference = 0;

if(isWithinLimit(speed,area)){
  if(area=='motorway'){
    console.log(`Driving ${speed} km/h in a ${motorway} zone`)
  }

  else if(area == 'interstate'){
    console.log(`Driving ${speed} km/h in a ${interstate} zone`)
  }

  else if(area == 'residential'){
    console.log(`Driving ${speed} km/h in a ${residential} zone`)
  }

  else{
    console.log(`Driving ${speed} km/h in a ${city} zone`)
  }
 

}

else{
  if(area=='motorway'){
    difference =speed-motorway;
    if(difference<=20) status = 'speeding';
    else if(difference<=40) status = 'excessive speeding';
    else status = 'reckless driving'

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${motorway} - ${status}`)
  }

  else if(area=='interstate'){
    difference =speed-interstate;
    if(difference<=20) status = 'speeding';
    else if(difference<=40) status = 'excessive speeding';
    else status = 'reckless driving'

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${interstate} - ${status}`)
  }

  else if(area=='city'){
    difference =speed-city;
    if(difference<=20) status = 'speeding';
    else if(difference<=40) status = 'excessive speeding';
    else status = 'reckless driving'

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${city} - ${status}`)
  }

  else if(area=='residential'){
    difference =speed-residential;
    if(difference<=20) status = 'speeding';
    else if(difference<=40) status = 'excessive speeding';
    else status = 'reckless driving'

    console.log(`The speed is ${difference} km/h faster than the allowed speed of ${residential} - ${status}`)
  }
}
 

}


roadRadar(40, 'city')
