function storeCatalogue(input){
    let catalogue = {};

    for (let index = 0; index < input.length; index++) {
        let [product, priceProduct] = input[index].split(' : ');
        priceProduct = Number(priceProduct);

        catalogue[product] = priceProduct;
        
    }

    let sortedCatalogue = Object.entries(catalogue);
    sortedCatalogue = sortedCatalogue.sort((a, b) => a[0].localeCompare(b[0]));

    for (let index = 0; index < sortedCatalogue.length;) {
        let capitalLetter = sortedCatalogue[index][0][0];

        console.log(capitalLetter);

        for (let j = index; j < sortedCatalogue.length; j++) {
            if(sortedCatalogue[j][0][0] == capitalLetter){
                console.log("  " + sortedCatalogue[j][0] + ": " +sortedCatalogue[j][1] );
                index++;

            }
            
        }
    }



}

storeCatalogue(['Appricot : 20.4','Fridge : 1500', 'TV : 1499', 'Deodorant : 10', 'Boiler : 300', 'Apple : 1.25',
 'Anti-Bug Spray : 15', 'T-Shirt : 10'])