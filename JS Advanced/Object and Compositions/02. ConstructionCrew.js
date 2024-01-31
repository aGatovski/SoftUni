function solve(input){

  if(input.dizziness== true){
    input.levelOfHydrated = 0.1 * input.weight * input.experience;
    input.dizziness= false;
  }
  return input;


}
solve({ weight: 80,
  experience: 1,
  levelOfHydrated: 0,
  dizziness: true }
)