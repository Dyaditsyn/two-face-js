"use strict";

let N, M, sum = 0,
    choice;

function MyInteger(param){
    if ( param === "" || param === " " || param === null){
        return false;
    } else {
        return Number.isInteger(+param)
    }
}

do{
    N = prompt("Please enter the lower limit of numbers to sum - must be integer", [0]);
} while (  !(MyInteger(N)) )


do{
    M = prompt("Please enter the upper limit of numbers to sum - must be integer bigger than lower", [0]);
} while ( !(MyInteger(M)) || (+M < +N) )

choice = confirm("Wish you skip even numbers? OK - YES, Cancel - NO");

for (let i = +N; i <= +M; i++){

    if (choice){ 

        if (i % 2){
            sum += i;
        };
        
    } else{
        sum += i;
    }
} 

alert("Your sum is: " + sum);

console.log(`The first number is: ${N} \nThe second number is: ${M} \nWish you skip even numbers? ${choice} \nThe sum is: ${sum}`);

document.write(`The first number is: ${N}<br>
The second number is: ${M}<br>
Wish you skip even numbers? ${choice}<br>
The sum is: ${sum}`);


