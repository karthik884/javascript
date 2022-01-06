//1. ANAGRAM
// function checkStringsAnagramOrNot (a,b) {
        // let a = prompt("enter the first string");
        // let b = prompt("enter the second string");
        // let len1 = a.length;
        // let len2 = b.length;
        // if(len1 !== len2) {

        //     if(len1 !== len2) {
        //         console.log("invalid strings");
        //     }
        // } else{

        //     let str1 =  a.split('').sort().join('');
        //     let str2 =  b.split('').sort().join('');

        //     if(str1 === str2) {
        //         console.log("given strings are a ANAGRAM STRINGS");
        //     } 
        //     else {
        //         console.log("given two strings are NOT A ANAGRAM STRINGS");
        //     }
        // }
// }

// checkStringsAnagramOrNot("lession","silents")

// // 2. REMOVE ARRAY FIBBONOCICES
// const array = [4, 5, 6, 4, 7, 9, 1];
// let c = [];
// for (let i of array) {
//   if (c.indexOf(i) === -1) {
//     c.push(i);
//   }
// }

// console.log(c);

// 3. FACTORIAL NUMBER WITH RECURSION 
// function fact(x) {
//       if (x === 0) {
//           return 1;
//       }
//       else {
//           return x * fact(x - 1);
//       }
//     }
//     const n = 5;
//     if (n > 0) {
//       let result = fact(n);
//       console.log(`The factorial of ${n} is ${result}`);
//     }

// 4. RECURSION

// let NUMBER = (A, B) => {
//   while(A != B){
//     if(A > B){
//       A = A - B;
//     }else{
//       B = B - A;
//     }
//   }
//   return B;
// }
// console.log("The GCD IS : ",NUMBER(12,360));


// 4. GCD of two integers

// let GCD ;
// const number1 = prompt('Enter a first positive integer: ');
// const number2 = prompt('Enter a second positive integer: ');

// for (let i = 1; i <= number1 && i <= number2; i++) {


//     if( number1 % i == 0 && number2 % i == 0) {
//         hcf = i;
//     }
// }


// console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);


// // 5 FIBBONOCICES
 
// var i;
// var fib = []

// fib[0] = 0;
// fib[1] = 1;

// for (i=2; i<=20; i++){
//     fib[i] = fib[i-2] + fib[i-1];
//     console.log(fib[i]);
// }

// 6.passcal triangle
// function pascals(triangle) {
//     if (triangle === 0) return [];
//     if (triangle === 1) return [[1]];
//     let result = [];
//     for (let i = 1; i <= triangle; i++) {
//       let a = [];
//       for (let j = 0; j < i; j++) {
//         if (j === 0 || j === i - 1) {
//           a.push(1);
//         } else {
//           a.push(result[i - 2][j - 1] + result[i - 2][j]);
//         }
//       }
//       result.push(a);
//     }
//     return result;
//   }
//   console.log(pascals(15));


// sort bubble array

// var a = [234, 43, 55, 63, 5, 6, 235, 547];
// console.log("Unsorted Array is : ",a);
// for(var i = 0; i < a.length; i++){
//   for(var j = 0; j < ( a.length - i -1 ); j++){
//     if(a[j] > a[j+1]){
//     var temp = a[j]
//     arr[j] = a[j + 1]
//     arr[j+1] = temp
//     }
//   }
// }
// console.log("Sorted Array is : ",a);

// 8.
// let a=String(prompt("Enter Your Choice : "));
// for (let i=0;i<a;i++){
//     if(i%2==0){
//         console.log(`${i} is Even`);
//     }
//     else{
//         console.log(`${i} is Odd`)
//     }
// }
// // 9 MARK GRADE
//     let mark = prompt("enter the mark");

//     if(mark >= 90) {
//         console.log("A GRADE");
//     }
//     else if(mark >=80) {
//         console.log("B GRADE");
//     }
//     else if(mark>=70) {
//         console.log("C GRADE");
//     }
//     else if(mark>=50) {
//         console.log("D GRADE");
//     }
//     else if(mark<=50){
//         console.log("THE STUDENT IS FAIL")
//     }



//     // 10 VOTE
//     let age = prompt("enter your age");

//     if(age >=18){
//         console.log("you are eligible to vote")
//     }
//     else {
//         console.log("you are not eligible to vote")
//     }

// 2(4) get current date
var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curday('/'));
//     console.log(curday('-'));






