function solve(input){
 
  let shop=[];

  for (let i = 0; i < input.length; i++) {
      let [townName, productName , price] = input[i].split(' | ')
      let obj={};
      let found = false;


      for (const el of shop) {
        if (el.product === productName) {
          found=true;
          if(el.price> Number(price)){
            el.price = Number(price);
            el.name = townName;
          }
          
        }
      }
      
      if(!found){
        obj.name = townName;
        obj.product = productName;
        obj.price = Number(price);
        shop.push(obj);
      }
  }
  for (const el of shop) {
    console.log(`${el.product} -> ${el.price} (${el.name})`)
  }

}