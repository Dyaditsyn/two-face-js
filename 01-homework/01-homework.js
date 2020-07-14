let priceOfSocks = 15.678;
let priceOfJeans = 123.965;
let priceOfTshort = 90.2345;

console.log("The highest price is: " + Math.max(priceOfSocks, priceOfJeans, priceOfTshort));
console.log("The lowest price is: " +Math.min(priceOfSocks, priceOfJeans, priceOfTshort));

let priceTotal = priceOfSocks + priceOfJeans + priceOfTshort;
console.log("The total price is: " + priceTotal);

let priceTotalNoCents = Math.floor(priceOfSocks) + Math.floor(priceOfJeans) + Math.floor(priceOfTshort);
console.log("The total price calculated without cents rounded down is: " + priceTotalNoCents );

function MyRound100(val) {
  return Math.round(val / 100) * 100;
}
console.log("The total price rounded to hundreds is: " + MyRound100(priceTotalNoCents) );

let isEven = false;
if (Math.floor(priceTotal) % 2 === 0){
  isEven = true;
}
console.log("Is the total price rounded down is an even number? " + isEven);

let change = 500 - priceTotal;
console.log("The change from 500 is " + change);

let medianRounded = (priceTotal / 3).toFixed(2);
console.log("The median value of prices rounded to two digits is " + medianRounded);

//Last question

let discount = (Math.random()*100).toFixed(0);
let toPay = (priceTotal * (1 - discount / 100)).toFixed(2);
let profit = (priceTotal/2 - priceTotal*discount/100).toFixed(2);
console.log("Your discount is: " + discount +"%");
console.log("To pay is: " + toPay);
console.log("The profit is: " + profit);
