"use strict";

const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

// 1. Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом. 
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs(students){
    const boys = [];
    const girls = [];
    const pairs = [];
    let student = "";

    for (let i = 0; i < students.length; i++){
        student = students[i].split('').reverse();
            if (student[0].toLowerCase()  === 'а' ){
            girls.push(students[i]);
            } 
            else {
            boys.push(students[i]);
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



// 3. Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]



// 4. Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, 
// але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

// Consol - output
const pairs = getPairs(students);
console.log(pairs);