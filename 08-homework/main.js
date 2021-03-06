"use strict";

// 1. У стдентів повинні бути наступні властивості: university, course, fullName, вони передаються при створенні студента(в конструктор).
// 2. Створіть метод this.getInfo() -> "Студент 1го курсу Вищої Школи Психотерапії м.Одеса, Остап Родоманський Бендер", 
// метод повертає сукупну інформацію про курс, учбовий заклад та імені студента.
// 3. Створіть геттер оцінок this.marks, який повертає масив оцінок студента [5, 4, 4, 5]
// 4. Створіть сеттер оцінок this.marks = 5, який дозволяє поставити оцінку студенту. Після того, як оцінка поставлена, 
// геттер повинен повернути масив this.marks -> [5, 4, 4, 5, 5]
// 5. Створіть метод отримання середнього балу this.getAverageMark() -> 4.6
// 6. Створіть метод this.dismiss, який "виключить" студента. Після виклику цього методу – ставити студенту оцінки та отримувати їх більше не можна. 
// (Ніяких помилок, просто повертається завжди null замість масиву оцінок)
// 7. Створіть метод this.recover, який дозволить поновити студента

const student = new Student ('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер');
student.marksArr = [5, 4, 4, 5];

console.group(`Basic`);
console.log(`Creating student using class: ${JSON.stringify(student)}`);
console.log(`Returning general student info using getInfo() method: ${student.getInfo()}`);
console.log(`Returning marks using marks getter: ${student.marks}`);
console.log(`Adding new mark using marks setter: ${student.marks = 5}`);
console.log(`Returning updated marks using marks getter: ${student.marks}`);
console.log(`Marks average of ${student.fullName} is  ${student.getAverageMark()}`)

console.log(`Dissmissing student ${student.fullName}: ${student.dismiss()}`)
console.log(`Returning general not existing student student info using getInfo() method: ${student.getInfo()}`);
console.log(`Adding new mark to not existing using marks setter: ${student.marks = 5}`);
console.log(`Returning updated marks of not existing student using marks getter: ${student.marks}`);
console.log(`Marks average of not existing student ${student.fullName} is  ${student.getAverageMark()}`)

console.log(`Recovering student ${student.fullName}: ${student.recover()}`)
console.log(`Returning general student info using getInfo() method: ${student.getInfo()}`);
console.log(`Returning marks using marks getter: ${student.marks}`);
console.log(`Adding new mark using marks setter: ${student.marks = 5}`);
console.log(`Returning updated marks using marks getter: ${student.marks}`);
console.log(`Marks average of ${student.fullName} is  ${student.getAverageMark()}`)
console.groupEnd();

// Advanced

// 1. Створіть новий клас BudgetStudent, який повністю наслідує клас Student
// 2. Бюджетний студент може отримати стипендію за допомогою методу this.getScholarship. 
// Отримання стипендії супроводжується виведенням інформації в консоль: Ви отримали 1400 грн. стипендії
// 3. Метод отримання стипендії автоматично викликається кожні 30 секунд післе створення об'єкту. Підказка: викликайте його в constructor
// 4. Студент отримує стипендію тільки в тому випадку, якщо середній бал у нього вище або дорівнює 4.0
// 5. Якщо студента виключено, він не отримує стипендію (думаю це було і так очевидно :) )

const budgetStudent = new BudgetStudent ('Вищої Школи Психотерапії м.Одеса', '1', 'Остап Родоманський Бендер');
budgetStudent.marksArr = [5, 4, 4, 5];
const budgetStudent2 = new BudgetStudent ('Вищої Школи Психотерапії м.Одеса', '1', 'Вася Пупкін');
budgetStudent2.marksArr = [3, 4, 4, 3];
const budgetStudent3 = new BudgetStudent ('Вищої Школи Психотерапії м.Одеса', '1', 'Іван Петров');
budgetStudent3.marksArr = [5, 4, 4, 5];

console.group(`Advanced`);
console.log(`Creating student using class: ${JSON.stringify(budgetStudent)}`);
console.log(`Returning general student info using getInfo() method: ${budgetStudent.getInfo()}`);
console.log(`Returning general student info using getInfo() method: ${budgetStudent2.getInfo()}`);
console.log(`Returning general student info using getInfo() method: ${budgetStudent3.getInfo()}`);
console.log(`Dissmissing student ${budgetStudent3.fullName}: ${budgetStudent3.dismiss()}`)
console.groupEnd();