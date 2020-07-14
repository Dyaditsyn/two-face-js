const priceOfSocks = 15.678;
const priceOfJeans = 123.965;
const priceOfTshort = 90.2345;
const budget = 500;

const priceMax = Math.max(priceOfSocks, priceOfJeans, priceOfTshort);
const priceMin = Math.min(priceOfSocks, priceOfJeans, priceOfTshort);
console.log("The highest price is: " + priceMax);
console.log("The lowest price is: " + priceMin);

const priceTotal = priceOfSocks + priceOfJeans + priceOfTshort;
console.log("The total price is: " + priceTotal);

const priceTotalNoCents = Math.floor(priceOfSocks) + Math.floor(priceOfJeans) + Math.floor(priceOfTshort);
console.log("The total price calculated without cents rounded down is: " + priceTotalNoCents );

function MyRound100(val) {
  return Math.round(val / 100) * 100;
}
const priceTotalRounded = MyRound100(priceTotalNoCents)
console.log("The total price rounded to hundreds is: " + priceTotalRounded );

const isEven = Math.floor(priceTotal) % 2 ? false : true;
console.log("Is the total price rounded down is an even number? " + isEven);

const change = budget - priceTotal;
console.log("The change from 500 is " + change);

const medianRounded = (priceTotal / 3).toFixed(2);
console.log("The median value of prices rounded to two digits is " + medianRounded);

//Last question

let discount = (Math.random()*100).toFixed(0);
let toPay = (priceTotal * (1 - discount / 100)).toFixed(2);
let profit = (priceTotal/2 - priceTotal*discount/100).toFixed(2);
console.log("Your discount is: " + discount +"%");
console.log("To pay: " + toPay);
console.log("The profit is: " + profit);

//Advanced

console.log(`The highest price is: ${priceMax} \n 
The lowest price is: ${priceMin} \n 
The total price is: ${priceTotal} \n 
The total price calculated without cents rounded down is: ${priceTotalNoCents} \n
The total price rounded to hundreds is: ${priceTotalRounded} \n 
Is the total price rounded down is an even number? ${isEven} \n
The change from 500 is ${change} \n
The median value of prices rounded to two digits is ${medianRounded} \n
Your discount is: ${discount} % \n
To pay: ${toPay} \n
The profit is: ${profit}`);
