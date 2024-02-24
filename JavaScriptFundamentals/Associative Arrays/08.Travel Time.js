function solve(input)
{
  let travelDestination={};
  let travelCityGlobal={};
  for(let el of input)
  {
   
    let[country, city , price]= el.split(' > ');

    if(travelDestination.hasOwnProperty(country))
    {
      if(travelDestination[country].hasOwnProperty(city))
      {
        if(travelDestination[country][city]>price) 
        {
          travelDestination[country][city]=price;
        }
      }
      else
      {
        travelDestination[country][city]=price;
      }
     
    }

    else
    {
    travelDestination[country] ={};
    travelDestination[country][city]=price;
    }
  }
  let entries = Object.entries(travelDestination)
  entries.sort(([keyA,valueA],[keyB,valueB])=> keyA.localeCompare(keyB));
  for(let [key,value] of entries)
  {
    let innerEntries =Object.entries(value);
    let line = key + " -> ";
    innerEntries.sort(([keyA,valueA],[keyB,valueB])=>valueA-valueB)
    for(let [newKey,newValue] of innerEntries)
    {
      line+=newKey + " -> " + newValue +" ";
     
    }
    console.log(line)
  }
}
solve([
  'Bulgaria > Sofia > 25000',
  'Bulgaria > Sofia > 25000',
  'Kalimdor > Orgrimar > 25000',
  'Albania > Tirana > 25000',
  'Bulgaria > Varna > 25010',
  'Bulgaria > Lukovit > 10'
  ]
  )
