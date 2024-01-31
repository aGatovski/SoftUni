function solve(nameInput, populationInput, treasuryInput){
  
  const city={
    name:nameInput,
    population:Number(populationInput),
    treasury:treasuryInput,
    taxRate: 10,

    collectTaxes(){
      this.treasury+=this.population*this.taxRate/100
    },

    applyGrowth(percent){
      this.population += this.population * percent/100;
    },

    applyRecession(percent){
      this.treasury-=this.treasury*percent/100;
    }

  }
  
  
  
 
  }
  function solve1(name, population, treasury) {
    return {
    name, population, treasury,
    taxRate: 10,
    collectTaxes() {
    this.treasury += this.population * this.taxRate;
    },
    applyGrowth(percent) {
    this.population += Math.floor(this.population * percent / 100);
    },
    applyRecession(percent) {
    this.treasury -= Math.floor(this.treasury * percent / 100);
    },
    };
    }

  solve('Tortuga', 7000, 15000)
  
  