function miner(input)
{
  let resources={};
for (let i = 0; i < input.length; i+=2) 
{
  const res=input[i];
  const resNum=Number(input[i+1]);
  if(resources.hasOwnProperty(res))resources[res]+=resNum ;
  else resources[res]=resNum ;
  
}
let entries=Object.entries(resources);
for(let [key,value] of entries)
{
  console.log(`${key} -> ${value}`)
    
}
}
