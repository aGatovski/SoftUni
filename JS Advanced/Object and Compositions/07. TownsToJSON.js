function townsJson(input){
    
    let result = [];

    let [Town , Latitude, Longitude] = input.shift().split(' | ');
    Town = Town.split('| ')[1];
    Longitude = Longitude.split(' |')[0];

    for (let index = 0; index < input.length; index++) {
        let townData = {};

       let[townName, townLatitude, townLongitude] = input[index].split(' | ');
       townName = townName.split('| ')[1];
       townLatitude = Number(townLatitude).toFixed(2);
       townLongitude = Number(townLongitude.split(' |')[0]).toFixed(2);

     townData[Town] = townName;
     townData[Latitude] = Number(townLatitude);
     townData[Longitude] = Number(townLongitude);
     result.push(townData)
       
    }

    let output = JSON.stringify(result)
    console.log(output);
    

}

townsJson(['| Town | Latitude | Longitude |',

'| Sofia | 42.696552 | 23.32601 |',

'| Beijing | 39.913818 | 116.363625 |'])