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

//! Optimize prime number



//! Task 
//! WAJP to find all the prime numbers from 1 to 100 
//! WAJP to find only 3 digits prime numbers  


//! WAJP to find all the factors of a given number
// input1:- 10 
// output1:- [1,2,5,10] 

// input2: 11
// output2: [1,11]

// input3: 0
// output: []



// const factorofanumber = (n) =>{
//     if(n === 0){
//         return [];
//     }
//     let fact = [1];
//     for(let i=2; i<=Math.round(n/2); i++){
//         if(n%i === 0){
//             fact.push(i);
//         }
//     }
//     fact.push(n);
//     return fact;
// }
// console.log(factorofanumber(11))




//! WAJP  to return the sum of the factors of a given number
// input1:- 10 
// output1:- [1,2,5,10] = 18 

// const sumoffactfanumber = (n) =>{
//     if(n === 0){
//         return 0;
//     }
//     let sum = 1;
//     for(let i=2; i<=Math.round(n/2); i++){
//         if(n%i === 0){
//             sum+=i;
//         }
//     }
//     return sum+n;
// }



// console.log(sumoffactfanumber(10))



//! Problems on indivisual numbers

//! WAJP to print how many digits  is this number is

const numofdigits = (n)=>{

    if(n<10 && n>0){
        return 1;
    }
    let digits = 0;
    while(n>0){
        digits++;
        // n/=10;
        n = Math.floor(n/10)
    }
    return digits;
}

// console.log(numofdigits(12345))

//! WAJP  sum of the digits of a given number


const numsumofdigits = (n)=>{

    if(n<10 && n>0){
        return 1;
    }
    let digits = 0;
    let sum=0;
    while(n>0){
        digits++;
        sum+= n%10;
        // n/=10;
        n = Math.floor(n/10)
    }
    return sum;
}

// console.log(numsumofdigits(1234))


//! Task 
//! WAJP to traverse a number with out using reverse method 
// const traverseNumber = (n) =>{
//     if(n>=0 && n<10){
//         return n;
//     }
//     let str = "";
//     while(n>0){
//         let value =  Math.floor(n%10);
//         str +=value;
//         n = Math.floor(n/10)

//     }
//     return str;
// }
// console.log(traverseNumber(12));

//? OR

// const traverseNumber = (n)=>{
//     if(n>=0 && n<10){
//         return n;
//     }

//     let reverse = 0;

//     while(n > 0){
//         reverse = reverse * 10 + (n%10);
//         n = Math.floor(n/10);
//     }
//     return reverse;
// }
// console.log(traverseNumber(34));
//! WAJP to check a given number is a palindrom or not with out using in built methods 

// const palindrom = (n)=>{
//     let dummy = n;
//     if(n>=0 && n<10){
//         return n;
//     }

//     let reverse = 0;

//     while(n > 0){
//         reverse = reverse * 10 + (n%10);
//         n = Math.floor(n/10);
//     }
//     if(dummy === reverse){
//         return true;
//     }else{
//         return false;
//     }
    
// }
// console.log(palindrom(100));

//! WAJP to print the sum of square of each digits 

// const sumofsquare = (n)=>{

//     if(n>=0 && n<10){
//         return n*n;
//     }
//     let ans = 0;
//     while(n>0){
//         let v = n%10;
//         ans += v ** 2;
//         n = Math.floor(n/10);
//     }
//     return ans;
// }

// console.log(sumofsquare(12))

//! WAJP to count how many zeros are present inside a given number
//! input: 90765200
//! output: 3   

// let digits=0, count= 0;

// function check(num){
//     while(num > 0){
//         digits = num % 10;
//         if(digits === 0){
//             count++;
//         }
//         num = Math.floor(num/10);
//     }
//     console.log(`${count} no of o is present`);
// }
// check(12305604)

//! WAJP to find first digit and last digit of a number

const finstfirstandLast= (n) =>{
    let first = 0, last = 0;
    if(n>=0 && n<10){
        first=n;
        last=n;
    }

    last = n%10;

    while(n>0){
        first=n;
        n = Math.floor(n/10);
    }

    console.log(`first digit is ${first} last digit is ${last}`)
}

// finstfirstandLast(1245345638)

//! WAJP extract even digits from a given number 
//! WAJP extract even digits from a given number 
//! WAJP to sum first and last digit 
//! WAJP to get the sum of digits which is present between first and last digit 