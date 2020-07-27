"use strict";

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number){
    const base = 10;
    let maxDigit = 0;
    let nextDigit;

    if ( (number == "") || (isNaN(number))  ) {
       return NaN;
    }

    number = Math.abs(number);
    
    while ( number){
        nextDigit = number % base;
        number /= base;
        if ( nextDigit > maxDigit){
            maxDigit = nextDigit
        }
    }
    return maxDigit;
}

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function myPow(base, pow){

    if ( (base === "") || (isNaN(base)) || (pow === "") || (isNaN(pow)) || !(Number.isInteger(pow)) ) {
        return NaN;
    }

    if (base === 0) {return 1}

    let result = 1;

    for (let i = 0; i < Math.abs(pow); i++){
        result *= base;
    }

    return ( pow > 0 ) ? result : (1 / result);
}

// 3. Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function capitalizeName(Name){
    Name = Name.trim();
    return Name.slice(0, 1).toUpperCase() + Name.slice(1).toLowerCase();
}

// 4. Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. (Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function getNetPay(grossSalary){
    const tax1 = 0.18;
    const tax2 = 0.015;
    return grossSalary*(1-tax1-tax2);
}

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(minValue, maxValue){
    return Math.floor(minValue + (Math.random()*((maxValue - minValue) + 1)));
}

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, string){
    letter = letter.toLowerCase();
    const stringByLetter = string.toLowerCase().split("");
    let counter = 0;
    for (let i = 0; i < stringByLetter.length; i++){
        if ( letter === stringByLetter[i]){
            counter++;
        }
    }
    return counter;
}
// 7. Створіть функцію, яка конвертує долари в гривні та навпаки в залежності від наявності символа $ або UAH в рядку. Приклад: convertCurrency("100$") -> 2500 грн. або convertCurrency("2500UAH") -> 100$
// Врахуйте, інші валюти не конвертуються, потрібно виводити помилку, і також регістр uah не має значення.

function convertCurrency(currency){
    const value = parseInt(currency);
    if(currency.includes("$") && !(isNaN(value)) ){
        return value*25 + "UAH";
    }
    else if (currency.toLowerCase().includes("uah")  && !(isNaN(value)) ){
        return value/25 + "$";
    }
    else return "Invalid input. Please enter currency to convert in UAH or $";
}

// 8. Створіть функцію генерації випадкового паролю (тільки числа), довжина встановлюється користувачем або по замовчуванню = 8 символам.
// Приклад: getRandomPassword(4) -> 1875, getRandomPassword() -> 87240124

function getRandomPassword(passLength = 8){

    if ( (isNaN(passLength)) || (+passLength === 0)){
        return "Invalid password length"
    }

    let password = "";
    for (let i = 0; i < passLength; i++){
        password += Math.floor(Math.random()*10);
    }
    return password
}


// 9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

// 11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"