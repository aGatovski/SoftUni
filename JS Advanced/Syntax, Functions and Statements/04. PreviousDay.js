
function previousDay(year, month, day) {
  // Create a Date object with the given year, month, and day
  let currentDate = new Date(year, month - 1, day); // Note: months are 0-indexed in JavaScript Date
  
  // Subtract one day (24 hours in milliseconds) from the current date
  let previousDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
  
  // Extract the year, month, and day from the previous date
  let prevYear = previousDate.getFullYear();
  let prevMonth = previousDate.getMonth() + 1; // Adding 1 since months are 0-indexed
  let prevDay = previousDate.getDate();
  
  // Format the result as a string in the desired format
 console.log( `${prevYear}-${prevMonth}-${prevDay}`);
  
  
}


previousDay(2016, 9, 30)