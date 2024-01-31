function solve(input){
  let engineVehicle ={ };
  let wheelArray=[];

  if(input.power<=90){
    
    engineVehicle.power=90;
    engineVehicle.volume=1800;
  }

  else if(input.power>90 && input.power<=120){
    
    engineVehicle.power=120;
    engineVehicle.volume=2400;
  }
  else {
    
    engineVehicle.power=200;
    engineVehicle.volume=3500;
  }
 
  if(input.wheelsize%2==0){
    input.wheelsize--;
  }

  for (let i = 0; i < 4; i++) {
    wheelArray[i] =  input.wheelsize;
    
  }


  let assembledVehicle= { model:input.model, engine:engineVehicle, carriage: {type:input.carriage, color: input.color},wheels: wheelArray }

  return assembledVehicle;

}