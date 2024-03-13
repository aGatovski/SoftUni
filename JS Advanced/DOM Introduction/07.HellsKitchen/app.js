function solve() {
    document.querySelector('#btnSend').addEventListener('click', onClick);
    const textareaRef = document.querySelector('textarea'); // Select the textarea element
    const bestRestaurantInfoRef = document.querySelector("#bestRestaurant p");
    const workersInfoRef = document.querySelector("#workers p");
 
    function onClick () {
       let data = JSON.parse(textareaRef.value);
       let result={};
       for (const line of data) {
          let [name,employees] = line.split(' - ');
 
          if(!result.hasOwnProperty(name)){
             result[name]={
                averageSalary:0,
                bestSalary:0,
                employees:[]
             }
 
          }
          let currentEmployees = getArrayOfEmployees(employees,  result[name].employees);
          result[name].employees = sortEmployees(currentEmployees)
 
          updateSalary(result[name]);
        
       }
       let bestRestaurant = findBestRestaurant(result);
          console.log(bestRestaurant)
       appendBestRestaurant(bestRestaurant);
       appendWorkers(bestRestaurant);
      
    }
 
    function appendWorkers(bestRestaurant){
 
       for (const worker of bestRestaurant[1].employees) {
          workersInfoRef.textContent += `Name: ${worker.name} With Salary: ${worker.salary} `;
       }
 
      
    }
 
    function appendBestRestaurant(bestRestaurant) {
       bestRestaurantInfoRef.innerHTML = "Name: " + bestRestaurant[0] +
           " Average Salary: " + bestRestaurant[1].averageSalary+
           " Best Salary: " + bestRestaurant[1].bestSalary;
   }
 
    function findBestRestaurant(restaurantsArr){
      
       return Object.entries(restaurantsArr).sort((a,b) => { return b[1].averageSalary - a[1].averageSalary})[0];
    }
 
    function sortEmployees(arrayOfEmployees){
       return arrayOfEmployees.sort((employeeA,employeeB) => employeeB.salary - employeeA.salary);
    }
 
    function getArrayOfEmployees(employeesData, existingWorkers){
    
       let arrayOfEmployees = employeesData.split(', ');
 
       for(let tokens of arrayOfEmployees){
          let [name,salary] = tokens.split(' ');
          salary = Number(salary);
 
          existingWorkers.push({name,salary});
       }
 
       return existingWorkers;
    }
 
   function updateSalary(restaurantName) {
     let sumOfSalary = 0;
     let bestSalary = 0;
 
     for (const employee of restaurantName.employees) {
         sumOfSalary += employee.salary;
 
         if (bestSalary < employee.salary) {
             bestSalary = employee.salary;
         }
     }
 
     restaurantName.bestSalary = Number(bestSalary).toFixed(2);
     restaurantName.averageSalary = Number(sumOfSalary / restaurantName.employees.length).toFixed(2);
 }
 }