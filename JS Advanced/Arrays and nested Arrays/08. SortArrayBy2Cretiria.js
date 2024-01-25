function solve(input){

  input=input.sort((a,b) => a.length - b.length || a.localeCompare(b))
  for (let i = 0; i < input.length; i++) {
   console.log(input[i])
    
  }
}
solve(['alpha', 
'beta', 
'gamma']
)