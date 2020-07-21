"use strict";

let N, M, choice, sum = 0;

do{
    N = +prompt("Please enter the lower limit of numbers to sum - must be non-zero integer");
} while ( (isNaN( N ) ) || (N % 1) )

do{
    M = +prompt("Please enter the upper limit of numbers to sum - must be non-zero integer bigger than lower");
} while ( (isNaN( N ) ) || (N % 1) || (M < N) )

choice = confirm("Wish you skip even numbers? OK - YES, Cancel - NO");

for (let i = N; i <= M; i++){

    if (choice){

        if (i % 2){
            sum += i;
        };
        
    } else{
        sum += i;
    }
} 

console.log(sum)

alert("Your sum is: " + sum);