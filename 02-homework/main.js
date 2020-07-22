"use strict";

let firstNum, secondNum, sum = 0,
    choice;

function myInteger(param){
    if (  param === null || !param.trim()){
        return false;
    } else {
        return Number.isInteger(+param)
    }
}

function askReInput(param){
    if ( !(myInteger(param)) ) {
        alert("Wrong input! Please enter integer only");
    }
}

do{
    firstNum = prompt("Please enter the lower limit of numbers to sum - must be integer", [0]);
    askReInput(firstNum);
} while (  !(myInteger(firstNum)) )


do{
    secondNum = prompt("Please enter the upper limit of numbers to sum - must be integer bigger than lower", [0]);
    askReInput(secondNum);
} while ( !(myInteger(secondNum)) || (+secondNum < +firstNum) )

choice = confirm("Wish you skip even numbers? OK - YES, Cancel - NO");

for (let i = +firstNum; i <= +secondNum; i++){

    if (choice){ 

        if (i % 2){
            sum += i;
        };
        
    } else{
        sum += i;
    }
} 

alert("Your sum is: " + sum);

console.log(`The first number is: ${firstNum} \nThe second number is: ${secondNum} \nWish you skip even numbers? ${choice} \nThe sum is: ${sum}`);

document.write(`The first number is: ${firstNum}<br>
The second number is: ${secondNum}<br>
Wish you skip even numbers? ${choice}<br>
The sum is: ${sum}`);


