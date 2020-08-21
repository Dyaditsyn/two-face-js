"use strict";

const students = [{
  name: "Tanya",
  course: 3,
  subjects: {
    math: [4, 4, 3, 4],
    algorithms: [3, 3, 3, 4, 4, 4],
    data_science: [5, 5, 3, 4]
  }
}, {
  name: "Victor",
  course: 4,
  subjects: {
    physics: [5, 5, 5, 3],
    economics: [2, 3, 3, 3, 3, 5],
    geometry: [5, 5, 2, 3, 5]
  }
}, {
  name: "Anton",
  course: 2,
  subjects: {
    statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
    english: [5, 3],
    cosmology: [5, 5, 5, 5]
  }
}];

// 1. Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function  getSubjects(students){
    const subjArr = Object.keys(students.subjects);
    let studSubj = subjArr.map( subject => {
      return subject.slice(0, 1).toUpperCase() + subject.slice(1).toLowerCase(); 
    })
    studSubj = studSubj.map( subject => {
      return subject.replace("_", " "); 
    })
    return studSubj;
  }

// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(students){
    const averages = [];
      for ( let key in students.subjects){
        const subjMarks = students.subjects[key];
        const subjAverage = getAverage(...subjMarks);
        averages.push(subjAverage);
      }
    const averageMark = getAverage (...averages);
    
    function getAverage (...numbers){
      const total = numbers.reduce((total, number) => {
          return total + number; 
        }, 0);
        return total / numbers.length;
    }
    
    return +averageMark.toFixed(2); 
  }

// 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду 
// по переданому студенту (вам знадобиться функція з попереднього завдання). ПОвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(students){
    const averageMark = getAverageMark(students);
    const studentInfo = {
      name: students.name,
      course: students.course,
      averageMark: averageMark,
    };
    return studentInfo;
  }

// 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

function getStudentsNames(students){
    const studentsNames = students.map (student => {
      return student.name;
    })
    return studentsNames.sort();
  }

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getStudentsNames(students){
    const studentsNames = students.map (student => {
      return student.name;
    })
    return studentsNames.sort();
  }

// 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students){
  const studentsInfo = students.map (student => {
    return getStudentInfo(student);
  })
  
  const studentsMarks = studentsInfo.map (mark => {
    return mark.averageMark;
  })
  
  const maxMark = Math.max(...studentsMarks);
  
  const bestStudent = studentsInfo.find(mark => mark.averageMark === maxMark).name;

  return bestStudent;
}

// 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, 
// а значення – кількість їх повторень.

function calculateWordLetters(word){
    const lettersCountObj = {};
    const lettersArr = word.trim().toLowerCase().split('');
    lettersArr.forEach(letter => {
      lettersCountObj[letter] = lettersCountObj[letter] ? (lettersCountObj[letter] + 1) : 1;
    })
    return lettersCountObj
  }

// Functions output

const studSubjects = getSubjects(students[0]);
console.log(studSubjects);

const averageMark = getAverageMark(students[0]);
console.log(averageMark);

const studentInfo = getStudentInfo(students[0]);
console.log(studentInfo);

const studenstNames = getStudentsNames(students);
console.log(studenstNames);

const bestStudent = getBestStudent(students);
console.log(bestStudent);

const lettersCountObj = calculateWordLetters("Тест");
console.log(lettersCountObj);


