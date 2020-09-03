"use strict";

// Зробіть 25 квадратів розміру 50х50 пікселів кожен, зафарбовані у випадковий колір. Квадрати мають розташовуватись по 5 в ряд.
// Щоб квадрати з'явились на сторінці, необхідно викликати функцію generateBlocks();

function generateRandomColor(){
    const numLength = 6;
    const hexDigits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
    let hexColor = "#";
    for(let i = 0; i < numLength; i++){
        hexColor += hexDigits[Math.floor(hexDigits.length * Math.random())];
    }
    return hexColor;
}

function generateBlocks(){
    const squares = 25;
    for (let i = 0; i < squares; i++){
        const box = document.createElement('div');
        document.querySelector('.wrapper').appendChild(box)
        box.classList.add('box-style');
        box.style.backgroundColor = generateRandomColor();
    }
}

// Advanced зробіть так, щоб квадрати змінювали колір раз на секунду.
// Щоб квадрати з'явились на сторінці та почали змінюватись, необхідно викликати функцію generateBlocksInterval();

function generateBlocksInterval(){
    const squares = 25;
    for (let i = 0; i < squares; i++){
        const box = document.createElement('div');
        document.querySelector('.wrapper').appendChild(box)
        box.classList.add('box-style');
        box.style.backgroundColor = generateRandomColor();
        setInterval(() => box.style.backgroundColor = generateRandomColor(), 1000);
    }
}

// Function call 

//generateBlocks();
generateBlocksInterval();

