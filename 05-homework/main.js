"use strict";

// 1. Створіть функцію getRandomArray(length, min, max) – яка повертає масив випадкових цілих чисел. 
// У функції є параметри: length - довжина масиву, min – мінімальне значення цілого числа, max – максимальне значення цілого числа. 
// Приклад: getRandomArray(15, 1, 100) –> [6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2]

// ************ TASK 1 *****************
function getRandomArray(length, min, max){
    const randomArray = [];
    for (let i = 0; i < length; i++){
        randomArray.push(getRandomNum(min, max));
    }
    return randomArray;

    function getRandomNum(minVal, maxVal){
        return Math.floor(+minVal + (Math.random()*((+maxVal - +minVal) + 1)));
    }
}

const randomArray = getRandomArray(15, 1, 100);
console.log(`Function1: getRandomArray: ${randomArray}`);

// 3. Створіть функцію getAverage(...numbers) – яка рахує середнє арифметичне всіх переданих в неї аргументів. 
// НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
//  Приклад: getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 34.4

// ************ TASK 2 *****************

function getAverage (...numbers){
    const integers = numbers.filter(number => Number.isInteger(number));
    const total = integers.reduce((total, number) => {
        return total + number; 
      }, 0);
      return total / integers.length;
  }

const average = getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Function3: getAverage of (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): =>  ${average}`);

// 4. Створіть функцію getMedian(...numbers) – яка рахує медіану всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 23 
// Приклад: getMedian(1, 2, 3, 4) –> 2.5 
// Приклад: getMedian(1, 2, 3, 4, 5) –> 3

// ************ TASK 3 *****************

function getMedian (...numbers) {
    let median;
    const integers = numbers.filter( number => Number.isInteger( number ))
                            .sort((a, b) => a - b );
    const centerIndex = Math.ceil( integers.length / 2) - 1;
    return (integers.length % 2) ? median = integers[centerIndex] : median = (integers[centerIndex] + integers[centerIndex + 1]) / 2;
}

let median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Function4: getMedian of (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): => ${median}`);
median = getMedian(1, 2, 3, 4);
console.log(`Function4: getMedian of (1, 2, 3, 4): => ${median}`);
median = getMedian(1, 2, 3, 4, 5);
console.log(`Function4: getMedian of (1, 2, 3, 4, 5): => ${median}`);

// 5. Створіть функцію filterEvenNumbers(...numbers) – яка фільтрує парні числа передані як аргументи функції
// Приклад: filterEvenNumbers(1, 2, 3, 4, 5, 6) -> [1, 3, 5]

// ************ TASK 4 *****************

function filterEvenNumbers (...numbers) {
    return numbers.filter( number => number%2 );
}

const oddNumbers = filterEvenNumbers(1, 2, 3, 4, 5);
console.log(`Function5: filterEvenNumbers of (1, 2, 3, 4, 5): => ${oddNumbers}`);

// 6. Створіть функцію countPositiveNumbers(...numbers) – яка порахує кількість чисел більших 0
// Приклад: countPositiveNumbers(1, -2, 3, -4, -5, 6) -> 3

// ************ TASK 5 *****************

function countPositiveNumbers (...numbers) {
    return (numbers.filter( number => number > 0 )).length;
}

const count = countPositiveNumbers (1, -2, 3, -4, -5, 6);
console.log(`Function6: countPositiveNumbers of (1, -2, 3, -4, -5, 6): =>  ${count}`);


// 7. Створіть функцію getDividedByFive(...numbers) – яка відфільтрує усі елементи в масиві та залишить тільки ті, 
// які діляться на ціло на 5
// Приклад: getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) -> [55, 55]

// ************ TASK 6 *****************

function getDividedByFive(...numbers) {
    return (numbers.filter( number => number%5 === 0));
}

const dividedByFive = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
console.log(`Function7: getDividedByFive of (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2): =>  ${dividedByFive}`);

// 8. Створіть функцію replaceBadWords(string) – яка 1) розіб'є фразу на слова, 2) замінить погані слова на зірочки (*). 
// При вирішенні цього завдання необхідно розбити масив на слова за допомогою функції .split(" "), 
// після чого масив необхідно буде склеїти .join(" ") Погані слова: shit та fuck. 
// Передбачте можливість розширювати список цих слів у майбутньому.
// Приклад: replaceBadWords("Are you fucking kidding?") -> "Are you ****ing kidding?" 
// Приклад: replaceBadWords("Holy shit!") -> "Holy ****!" 
// Приклад: replaceBadWords("It's bullshit!") -> "It's bull****!"

function replaceBadWords(string){
    badWords = [shit, fuck];
    const splited = string.split(" ");
    
}


// 9. Створіть функцію divideByThree(word), яка розбиває кожне слово на умовні склади по 3 букви. 
// Якщо букв менше трьох – не розбиває. Пробіли завжди видаляються. Рядок приводится до нижнього регістру. 
// Приклад: divideByThree("Commander) -> ["com", "man", "der"] Приклад: divideByThree("live") -> ["liv", "e"]

function divideByThree(word){

}

// 10. Створіть функцію generateCombinations(word), яка видасть всі можливі перестановки(унікальні, без повторень) букв в слові. 
// Для тестів не передавайте слова в яких більше 10 букв. Краще взагалі обмежити работу функції 10 буквами. 
// Приклад: generateCombinations("man") -> ["man", "mna", "amn", "anm", "nam", "nma"] 
// Приклад: generateCombinations("ol") -> ["ol", "lo"]

// 2. Створіть функцію getModa(...numbers) – яка вираховує моду всіх переданих в неї аргументів. НЕЦІЛІ ЧИСЛА ІГНОРУЮТЬСЯ
// Приклад: getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2) –> 2

//function getModa(...numbers){
  //  const integers = numbers.filter(number => Number.isInteger(number));
    //in work
//}

//const moda = getModa(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);
//console.log(moda);