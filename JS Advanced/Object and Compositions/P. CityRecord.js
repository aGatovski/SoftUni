function solve(name, population, treasury){
  const city={}
  
   city.name=name;
  city.population= population;
  city.treasury= treasury
  
  
  console.log(city)
  }
  
  solve('Tortuga', 7000, 15000)
  
  
  function createRecord(name, population, treasury) {
    return {
    name,
    population,
    treasury
    };
    }