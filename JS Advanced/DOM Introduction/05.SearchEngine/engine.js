function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);
 
    function onClick() {
       const text = document.getElementById("searchField").value.toLowerCase();
       const rows = document.querySelectorAll('td');
       let rowsArr = Array.from(rows);
 
       rowsArr.shift(); // Remove the first element if it's a header
       rowsArr.shift(); // Remove the second element if it's another header
 
       for (const row of rowsArr) {
          row.classList.remove('select');
       }
 
       for (const row of rowsArr) {
 
          const cols = row.textContent.toLowerCase();
 
          if(cols.includes(text)){ 
             row.parentElement.classList = 'select';
          }
 
       }
    }
 }