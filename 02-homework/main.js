"use strict";

let N, M, choice, sum = 0;

do{
    N = +prompt("Please enter the lower limit of numbers to sum - must be integer");
} while (  !(Number.isInteger(N)) )

console.log("The first number is: " + N)

do{
    M = +prompt("Please enter the upper limit of numbers to sum - must be integer bigger than lower");
} while ( !(Number.isInteger(M)) || (M < N) )

console.log("The second number is: " + M)

choice = confirm("Wish you skip even numbers? OK - YES, Cancel - NO");

console.log("Skip even numbers: " + choice)

for (let i = N; i <= M; i++){

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

