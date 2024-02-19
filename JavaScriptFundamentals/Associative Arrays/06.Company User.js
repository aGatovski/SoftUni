function solve(input)
{
  let companies={};
  let companyInfo=[];
  for(let el of input)
  {
    let [companyName,employeeID] = el.split(' -> ');

    if(companies.hasOwnProperty(companyName))
    {
     companies[companyName].push(employeeID);
    }

    else 
    {
      companies[companyName]=[];
      companies[companyName].push(employeeID);
    }

  }
let entries=Object.entries(companies);
entries.sort(([keyA,valueA],[keyB,valueB])=> keyA.localeCompare(keyB));
for(let [key,value] of entries)
{
  let uniqueEmployeeID= new Set(value);
  console.log(key );
  for(let employee of uniqueEmployeeID)
  {
    console.log("-- " + employee )
  }
}
}

solve(
  [
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
)
