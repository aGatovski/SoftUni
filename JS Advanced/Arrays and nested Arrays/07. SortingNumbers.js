function solve(arr) {
  let sorted = [];
  
  arr = arr.sort((a, b) => a - b);
  while (arr.length > 0) {
      
      sorted.push(arr.shift());
      sorted.push(arr.pop());

  }
  return sorted;
}
sortList([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])