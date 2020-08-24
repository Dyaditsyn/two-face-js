"use strict";

const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1. Створіть функцію getMyTaxes.call(country, salary) -> number; – яка рахує скільки податків ви заплатите як IT-спеціаліст в якійсь з країн. 
// Функція повинна викликатись через call та працювати з даними через this

function getMyTaxes(salary){
  return (this.tax * salary).toFixed(2);
}
console.group(`Task 1`);
console.log (`My tax in Ukraine from examle salary 1700 is: `, getMyTaxes.call(ukraine, 1700) );
console.log (`My tax in Latvia from examle salary 1700 is: `, getMyTaxes.call(latvia, 1700) );
console.log (`My tax in Litva from examle salary 1700 is: `, getMyTaxes.call(litva, 1700) );
console.groupEnd();

// 2. Створіть функцію getMiddleTaxes.call(country) -> number; – яка рахує скільки у середньому податків платятт IT-спеціалісти у кожній країні. 
// (tax * middleSalary). Функція повинна викликатись через call та працювати з даними через this

function getMiddleTaxes(){
  return (this.tax * this.middleSalary).toFixed(2);
}

console.group(`Task 2`);
console.log (`The tax from middle salary in Ukraine `, getMiddleTaxes.call(ukraine) );
console.log (`The tax from middle salary in Latvia `, getMiddleTaxes.call(latvia) );
console.log (`The tax from middle salary in Litva `, getMiddleTaxes.call(litva) );
console.groupEnd();

// 3. Створіть функцію getTotalTaxes.call(country) -> number; – яка рахує, скільки всього податків платять IT-спеціалісти у кожній країні. 
// (tax * middleSalary * vacancies). Функція повинна викликатись через call та працювати з даними через this

function getTotalTaxes(){
  return (this.tax * this.middleSalary * this.vacancies).toFixed(2);
}

console.group(`Task 3`);
console.log (`Total taxes in Ukraine `, getTotalTaxes.call(ukraine) );
console.log (`Total taxes in Latvia `, getTotalTaxes.call(latvia) );
console.log (`Total taxes in Litva `, getTotalTaxes.call(litva) );
console.groupEnd();

// 4. Створіть функцію getMySalary(country) – яка буде писати в консоль об'єкт виду: { salary: number, taxes: number, profit: number } 
// кожні 10 секунд. Значення salary – генеруйте випадковим чином у діапазоні 1500-2000. taxes – розраховується в залежності від вибраної країни та значення salary. 
// profit = salary - taxes;

function getMySalary(){
  const mySalary = {};
  const minSalary = 1500;
  const maxSalary = 2000;

  function getRandomNumber(minVal, maxVal){
    return Math.floor(+minVal + (Math.random()*((+maxVal - +minVal) + 1)));
  }  
  let timerId = setInterval( () => {

  const salary = getRandomNumber(minSalary, maxSalary);
  const taxes = +(this.tax * salary).toFixed(2);
  const profit = +(salary - taxes).toFixed(2);

  mySalary.salary = salary;
  mySalary.taxes = taxes;
  mySalary.profit = profit;

  console.log(`Salary info - `, mySalary);        
 
  }, 10000 );
  
  setTimeout(() => { clearInterval(timerId); console.log(`That's it, six times is good enough :)`) }, 60000);
}

getMySalary.call(ukraine) ;
//getMySalary.call(latvia) ;
//getMySalary.call(litva) ;

