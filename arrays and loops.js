gold = [26,68,47,82,91,39,58]
console.log(gold);

i = 0;

for(g of gold) 
{
   i+=g;
}

console.log(`the total of all gold items is ${i}`);
avg = i/gold.length;

console.log(`the average of all gold items is ${avg}`);
console.log(`\n................................................................\n !this question ends here! \n................................................................`)



items = [250,645,300,900,50];
console.log(`normal rate of items is ${items}.`);

for(w=0;w<items.length;w++)
  {
    
    offer = items[w]/10;
    items[w] -= offer;
  }

  console.log(`the discounted price of each items after applying 10% discount is ${items}.`);


