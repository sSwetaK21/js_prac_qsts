
// Using a loop print all odd numbers up to and including n. Don’t include 0. 

// let number = 10;
// for( let i = 1; i <= number; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

                // --------Question 2----------

// Print the sum of all even numbers in a range from a to b. (Including a,b)

// let num = 10;
// let num2 = 20;
// let sum = 0;
// for (let i = num; i <= num2; i++) {
//     if (i % 2 === 0) {
//         sum = sum + i;
//     }
// }
// console.log(sum);


                // --------Question 3----------

// Write a program to read the first and last digit of a number

// let number = 2345;
// let first = number;
// let last = number % 10;
// while (first >= 10) {
//    first = first / 10;
// }
// console.log(Math.floor(first));
// console.log(last);

                // --------Question 4----------

// Check whether the given number is an armstrong number or not. 
// ---Important Note---
// An Armstrong number is a number that is equal to the sum of the cubes of its own digits.

//  let number = 153;
// let sum = 0;
// let temp = number;
// while (temp > 0) {
//     let digit = temp % 10;
//     sum += digit * digit * digit;
//     temp = Math.floor(temp / 10);
// }
// if( number === sum){
//     console.log(number + " is an Armstrong number");
// } else {
//     console.log(number + " is not an Armstrong number");
// }

                        // --------Question 5----------

// Take two numbers and find product of all numbers between them that satisfy following condition (inclusive range): 
// Condition 1 - Second last digit of number is 4
// Condition 2 - Numbers should be even 


// let num = 10;
// let num2 = 20;
// let sum = 0;
// for (let i = num; i <= num2; i++) {
//     if (i % 2 == 0) {
//         let temp = i;
//         while (temp > 0) {
//             let digit = temp % 10;
//             if (digit === 4) {
//                 sum = sum + i;
//             }
//             temp = Math.floor(temp / 10);
//         }
//     }
// }
// console.log(sum);



                    // ----Question 6 ----------    

// Take a number and return all the even digits of the number.


// let number = 1289;
//     let sum = 0;
//     while (number > 0) {
//         let digit = number % 10;
//         if (digit % 2 == 0) {
//             sum = sum + digit;
//         }
//         number = Math.floor(number / 10);
//     }
//     console.log(sum);


                    // --------Question 7----------
//  Check whether the given number is equal to its reverse number or not

let number = 121;
let reverse = 0;
let temp = number;
while (temp > 0) {
    let digit = temp % 10;
    reverse = reverse * 10 + digit;
    temp = Math.floor(temp / 10);
}
if (number == reverse) {
    console.log(number + " is a reverse number");
} else {
    console.log(number + " is not a reverse number");
}
