function printMessage(fruit , weightMiligrams, pricePerKilogram){
console.log(`I need ${Number((weightMiligrams/1000) * pricePerKilogram).toFixed(2)} to buy ${Number(weightMiligrams/1000).toFixed(2)} kilograms ${fruit}.`)


}
printMessage('orange', 2500, 1.80) 