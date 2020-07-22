"use strict";

let N = 0,
    M = 0,  
    sum = 0,
    choice;

function MyInteger(param){
    if ( param === "" || param === " " || param === null){
        return false;
    } else {
        return Number.isInteger(+param)
    }
}

do{
    N = prompt("Please enter the lower limit of numbers to sum - must be integer");
} while (  !(MyInteger(N)) )

console.log("The first number is: " + N)

do{
    M = prompt("Please enter the upper limit of numbers to sum - must be integer bigger than lower");
} while ( !(MyInteger(M)) || (+M < +N) )

console.log("The second number is: " + M)

choice = confirm("Wish you skip even numbers? OK - YES, Cancel - NO");

console.log("Skip even numbers: " + choice)

for (let i = +N; i <= +M; i++){

    if (choice){ 

        if (i % 2){
            sum += i;
        };
        
    } else{
        sum += i;
    }
} 

console.log("The sum is: " + sum)

alert("Your sum is: " + sum);

