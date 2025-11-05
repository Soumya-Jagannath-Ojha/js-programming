//! WAJP to check a given number is a even or odd

// function evenOrodd(num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is a even number.`);
//   } else {
//     console.log(`${num} is a odd number.`);
//   }
// }

// evenOrodd(6);

// function palaindrom(num) {
    // let length = num.toString();
//  console.log(num%10); 

// }
// palaindrom(1234);

//! WAJP to check a given number is divisible by 5 or not

// function divisibleBy5ornot(num) {
//   if (num % 5 === 0) {
//     console.log(`${num} is divisible by 5.`);
//   } else {
//     console.log(`${num} is not divisible by 5.`);
//   }
// }

// divisibleBy5ornot(56);

//! WAJP to print the sum of numbers from 1 to 100

// function sumofnaturalnumbers(){
//     let ans = 0;
//     for(let i=1; i<=100; i++){
//         ans +=i;
//     }
//     console.log(ans)
// }

// sumofnaturalnumbers();

//! WAPJ to print sum of numbers from 0 to n (given input)

// function sumofnnumbers(n){
//     let ans = 0;
//     for(let i=1; i<=n; i++){
//         ans +=i;
//     }
//     console.log(ans)
// }

// sumofnnumbers(5);

//! WAPJ to print the sum of all even numbers from 0 to 100

// const sumofevennumber = ()=>{
//     let ans = 0;
//     for(let i=1; i<=100; i++){
//         if(i %2 === 0){
//             ans += i
//         }
//     }
//     console.log(ans)
// }
// sumofevennumber();
// const sumofoddnumber = ()=>{
//     let ans = 0;
//     for(let i=1; i<=100; i++){
//         if(i %2 !== 0){
//             ans += i
//         }
//     }
//     console.log(ans)
// }
// sumofoddnumber();

//! WAJP to print all the numbers from 0 to 100 in a array format

// let numsarray = ()=>{
//     let arr = [];
//     for(let i=0; i<=100; i++){
//         arr.push(i);
//     }
//     console.log(arr)
// }
// numsarray();

//! WAJP to print all the odd numbers from 1 to 100 inside an array

// const oddnums = ()=>{
//     let oddarr = [];
//     for(let i=1; i<=100; i++){
//         if(i %2 !== 0){
//             oddarr.push(i);
//         }
//     }
//     console.log(oddarr)
// }
// oddnums();

// const evennums = ()=>{
//     let evenarr = [];
//     for(let i=1; i<=100; i++){
//         if(i %2 === 0){
//             evenarr.push(i);
//         }
//     }
//     console.log(evenarr)
//     console.log(evenarr.length)
// }
// evennums();


//! WAJP to check whether it is a prime number or not

const checkPrime =(num)=>{

    if(num === 0 || num === 1){
        console.log("Invalid number")

        return;
    }

    let count = 0;
    for(let i=0; i<=num; i++){
        if(num%i === 0){
            count++;
        }
    }
    if(count > 2){
        console.log(`${num} is not a prime number.`)
    }else{
        console.log(`${num} is a prime number.`)

    }
}


//! Task 
//! WAJP to find all the prime numbers from 1 to 100 
//! WAJP to find only 3 digits prime numbers  