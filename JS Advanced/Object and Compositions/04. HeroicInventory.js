function solve(input){
 
  let registerHeroes= [];
  
  for (let i = 0; i < input.length; i++) {
    let [nameHero, levelHero , items] = input[i].split(' / ');
    levelHero  = Number(levelHero)
    let inventoryHero = items.split(', ')
    registerHeroes[i] = {name:nameHero, level:levelHero, items:inventoryHero} 
    
  }
  
  console.log(JSON.stringify(registerHeroes))
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])