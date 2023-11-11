function solve(input)
{
let playersDecks={};
let powerValue={2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,'J':11,'Q':12,'K':13,'A':14};
let typeValue ={S:4,H:3,D:2,C:1}
//vuvejdane na kartite na igrachite
for(let el of input)
{
  let [playerName,cards]= el.split(': ');
  let cardDeck = cards.split(', ');
  if(playerName in playersDecks)
  {
    playersDecks[playerName].push(...cardDeck)
  }
  else
  {
    playersDecks[playerName]=cardDeck;
  }
  
}

let entries = Object.entries(playersDecks);

for(let [name,deck] of entries)
{
  let uniqueCards=new Set(deck);
  let sumPoints=0;
  let line ="";
  line += name+": ";
 
  for(let card of uniqueCards)
  {
    let power = card.slice(0,card.length-1);
    let type = card[card.length-1]
    sumPoints+= powerValue[power]* typeValue[type];
  }
  line+=sumPoints;
  console.log(line)
  
}

}
solve(
  [
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD'
  ]
  )



  