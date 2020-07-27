"use strict";

// 1. Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(num){
    const base = 10;
    let maxDigit = 0;
    let nextDigit;

    if ( (num == "") || (isNaN(num))  ) {
       return NaN;
    }

    num = Math.abs(num);

    while ( num ) {
        nextDigit = num % base;
        num = Math.floor(num/base);
        if ( nextDigit > maxDigit) {
            maxDigit = nextDigit;
        }
    }
    return maxDigit;
}

// 2. Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function myPow(base, pow){
    base = +base;
    pow = +pow;

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
    return grossSalary*(1-tax1-tax2)+"грн";
}

// 5. Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(minVal, maxVal){
    return Math.floor(+minVal + (Math.random()*((+maxVal - +minVal) + 1)));
}

// 6. Створити функцію, яка рахує скільки разів певна буква повторюється в слові. Приклад: countLetter("а", "Асталавіста") -> 4

function countLetter(letter, str){

    letter = letter.toLowerCase();
    const splitString = str.toLowerCase().split("");
    let counter = 0;

    for (let i = 0; i < splitString.length; i++){
        if ( letter === splitString[i]){
            counter++;
        }
    }
    return counter ? counter : `The letter ${letter} is not found`;
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

    if ( (isNaN(passLength)) || (+passLength <= 0)){
        return "Invalid password length"
    }

    let password = "";
    for (let i = 0; i < passLength; i++){
        password += Math.floor(Math.random()*10);
    }
    return password
}

// 9. Створіть функцію, яка видаляє всі букви з речення. Приклад: deleteLetters('a', "blablabla") -> "blblbl"

function deleteLetter(letter, str){

    letter = letter.toLowerCase();
    const splitString = str.toLowerCase().split("");
    let counter = 0;
    
    for (let i = 0; i < splitString.length; i++){
        if ( letter === splitString[i]){
            splitString.splice(i, 1);
            counter++;
        }
    }
    return counter ? splitString.join('') : `The letter ${letter} is not found`;
}

// 10. Створіть функцію, яка перевіряє, чи є слово паліндромом. Приклад: isPalyndrom("мадам") -> true, isPalyndrom("кокос") -> false, isPalyndrom("Я несу гусеня") -> true

function isPalyndrom(str){
  
    const original = str.toLowerCase().split(' ').join(''); // one word low case
    const reverse = original.split('').reverse().join(''); // reverse one word
    return (original === reverse);
  }

// 11. Створіть функцію, яка видалить з речення букви, які зустрічаються більше 1 разу. Приклад: deleteDuplicateLetter("Бісквіт був дуже ніжним") -> "сктдеим"

function deleteDuplicateLetter(str){
    const strOriginalSplit = str.toLowerCase().split(' ').join('').split(''); 
    let newStr = "";
    for(let i = 0; i < strOriginalSplit.length; i++){
            if  (strOriginalSplit.indexOf(strOriginalSplit[i]) === strOriginalSplit.lastIndexOf(strOriginalSplit[i])) {
                newStr += strOriginalSplit[i];
            }
    }
    return newStr;
}

// ************************************************** Output ******************************************************

document.writeln(`Функція №1: Найбільша цифра в числі 1236:  ${getMaxDigit("1236")} <br>
Функція №1: Найбільша цифра в числі -987:  ${getMaxDigit("-987")} <br>
Функція №1: Найбільша цифра в числі blabla:  ${getMaxDigit("blabla")} <br>
Функція №2: Ступінь числа: 2^3 =  ${myPow("2", "3")} <br>
Функція №2: Ступінь числа: 2^-3 = ${myPow("2", "-3")} <br>
Функція №2: Ступінь числа: 0^-1 = ${myPow("0", "-1")} <br>
Функція №2: Ступінь числа: -10^2 = ${myPow("-10", "2")} <br>
Функція №3: Форматує ім'я: "влад" - ${capitalizeName("влад")} <br>
Функція №3: Форматує ім'я: "вЛАД" - ${capitalizeName("влад")} <br>
Функція №4: Зарплата нето з 1000грн:  ${getNetPay("1000")} <br>
Функція №5: Випадкове ціле число в діапазоні від 1 до 10:  ${getRandomNumber("1", "10")} <br>
Функція №6: Рахує скільки разів певна буква повторюється в слові: "а", "Асталавіста" - ${countLetter("а", "Асталавіста")} <br>
Функція №6: Рахує скільки разів певна буква повторюється в слові: "я", "Асталавіста" - ${countLetter("я", "Асталавіста")} <br>
Функція №7: Конвертує долари в гривні та навпаки: $100 в гривні - ${convertCurrency("100$")} <br>
Функція №7: Конвертує долари в гривні та навпаки: 2500UAH в гривні - ${convertCurrency("2500uAh")} <br>
Функція №7: Конвертує долари в гривні та навпаки: фігня - ${convertCurrency("фігня")} <br>
Функція №8: Генерація випадкового паролю - default 8 цифр - ${getRandomPassword()} <br>
Функція №8: Генерація випадкового паролю - 10 цифр - ${getRandomPassword("10")} <br>
Функція №8: Генерація випадкового паролю - -7 цифр - ${getRandomPassword("-7")} <br>
Функція №9: Видаляє всі вказані букви з речення - 'a', "blablabla" - ${deleteLetter('a', "blablabla")} <br>
Функція №9: Видаляє всі вказані букви з речення - 'с', "blablabla" - ${deleteLetter('с', "blablabla")} <br>
Функція №10: Перевіряє, чи є слово паліндромом - "кокос" - ${isPalyndrom("кокос")} <br>
Функція №10: Перевіряє, чи є слово паліндромом - "Я несу гусеня" - ${isPalyndrom("Я несу гусеня")} <br>
Функція №11: Видаляє з речення букви, які зустрічаються більше 1 разу. - "Бісквіт був дуже ніжним" - ${deleteDuplicateLetter("Бісквіт був дуже ніжним")}`);
