function solve(input){

  let cityInfo={};

  for (let i = 0; i < input.length; i++) {
    let obj={};

   let [name, population] = input[i].split(' <-> ')
    population = Number(population);

    if(cityInfo[name] != undefined){
      population +=cityInfo[name];
    }

    cityInfo[name] = population;

  }
  
  for(let el in cityInfo){
    console.log(el + " " + cityInfo[el] )
  }
 

}
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])