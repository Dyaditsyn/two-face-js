"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs(arr){
    const boys = [];
    const girls = [];
    const pairs = [];
    let student = "";

    for (let i = 0; i < arr.length; i++){
        student = arr[i].split('').reverse();
            if (student[0].toLowerCase()  === 'а' ){
            girls.push(arr[i]);
            } 
            else {
            boys.push(arr[i]);
            }
    }

    if (girls.length != boys.length){
        return "Sorry, can't build pairs for all group"
    }

    for (let i = 0; i < girls.length; i++){
        pairs.push([boys[i], girls[i]]);
    }
    return pairs;
}


// 2. Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function getThemes (pairsArr, themesArr){
    const newPairs = [];
    const pairsThemes = [];

    if (pairsArr.length != themesArr.length){
        return "Sorry, can't assign themes for all pairs"
    }

    for (let i = 0; i < pairsArr.length; i++){
        newPairs.push(pairsArr[i].toString().replace(",", " і "));
      }

    for (let i = 0; i < newPairs.length; i++){
        pairsThemes.push([newPairs[i], themesArr[i]]);
    }
    return pairsThemes;
}

// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function getMarks (studArr, markArr){
    const studentMarks = [];
    if (studArr.length != markArr.length){
        return "Sorry, can't assign marks for all students"
    }
    
    for (let i = 0; i < studArr.length; i++){
        studentMarks.push([studArr[i], markArr[i]]);
    }
    return studentMarks;
}

// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, 
// але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getPairMarks(arr){
    const randomMarks = [];
    const pairMarks = [];

    for (let i = 0; i < arr.length; i++){
        randomMarks.push(getRandomMark(1, 5)) ;
    }

    for (let i = 0; i < arr.length; i++){
        pairMarks.push([arr[i].toString().split(',').join('", "'), randomMarks[i]]);
    }

    return pairMarks;
}

function getRandomMark(minVal, maxVal){
    return Math.floor(+minVal + (Math.random()*((+maxVal - +minVal) + 1)));
}

// Consol - output

const pairs = getPairs(students);
console.log(pairs);

const pairsThemes = getThemes(pairs, themes);
console.log(pairsThemes);

const studentMarks = getMarks(students, marks);
console.log(studentMarks);

const pairMarks = getPairMarks(pairsThemes);
console.log(pairMarks);
