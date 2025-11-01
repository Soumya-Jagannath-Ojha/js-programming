// 29-10-25

//! 1.
// *
// **
// ***
// ****
// *****
// for(var i=1; i<=5; i++){
//     var res = "";
//     for(var j=1; j<=i; j++){
//         res+="*";
//     }
//     console.log(res)
// }

//! 2.
// *****
// *****
// *****
// *****
// *****
// for(var i=1; i<=5; i++){
//     var res = "";
//     for(var j=1; j<=5; j++){
//         res+="*";

//     }
//     console.log(res)
// }

//! 3
//  *  *  *  *  *
//  *  *  *  *
//  *  *  *
//  *  *
//  *
// for(var i=5; i>=1; i--){
//     var res = "";
//     for(var j=1; j<=i; j++){
//         res+=" * ";
//     }
//     console.log(res)
// }

//! 4.
// 1
// 0
// 1
// 0
// 1

// for(var i=1; i<=5; i++){
//     var ans = 1;
//     console.log("1")
//     for(var j=1; j<=1; j++){
//         console.log("0")
//     }

// }

// for (var i = 1; i <= 5; i++) {
//   if (i % 2 === 0) {
//     console.log(0);
//   } else {
//     console.log(1);
//   }
// }

//! 5.

// 1 1 1 1 1
// 0 0 0 0 0
// 1 1 1 1 1
// 0 0 0 0 0
// 1 1 1 1 1

// for(var i=1; i<=5; i++){
//     var output = "";
//     if(i % 2 === 0){
//         for(var j=1; j<=5; j++){
//             output+="0 ";
//         }
//         console.log(output)
//     }else{
//         for(var j=1; j<=5; j++){
//             output+="1 ";
//         }
//         console.log(output)
//     }
// }

//! Task

//! 6

// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1
// 1 0 1 0 1

// const n =5;
// for(var i=1; i<=n; i++){
//     var ans = "";
//     for(var j=1; j<=n; j++){
//         if(j%2 === 0){
//             ans+="0 "
//         }else{
//             ans+="1 "
//         }
//     }
//     console.log(ans)
// }

//! 7

// 1 0 0 0 0
// 0 1 0 0 0
// 0 0 1 0 0
// 0 0 0 1 0
// 0 0 0 0 1

// for(var i=1; i<=5; i++){
//     var res = "";
//     for(var j=1; j<=5;  j++){
//         if(i === j){
//             res+="1 "
//         }else{
//             res+="0 "
//         }
//     }
//     console.log(res);
// }

//! 8.
// 1 1 1 1 0  i=1 j=5
// 1 1 1 0 1  i=2 j=4
// 1 1 0 1 1  i=3 j=3
// 1 0 1 1 1  i=4 j=2
// 0 1 1 1 1  i=5 j=1

// for(var i=1; i<=5; i++){
//     var res = "";
//     for(var j=1; j<=5;  j++){
//         if((i + j) === 6){
//             res+="0 "
//         }else{
//             res+="1 "
//         }
//     }
//     console.log(res);
// }

// or
// const n =6;
// for(var i=1; i<=n; i++){
//     var res = "";
//     for(var j=1; j<=n;  j++){
//         if((i + j) === n+1){
//             res+="0 "
//         }else{
//             res+="1 "
//         }
//     }
//     console.log(res);
// }

//! 9.
// 1 0 0 0 1
// 0 1 0 1 0
// 0 0 1 0 0
// 0 1 0 1 0
// 1 0 0 0 1

// const n =5;
// for(var i=1; i<=n; i++){
//     var res = "";
//     for(var j=1; j<=n;  j++){
//         if((i + j) === n+1 || i === j){
//             res+="1 "
//         }else{
//             res+="0 "
//         }
//     }
//     console.log(res);
// }

//! 10.
// 0 0 1 0 0
// 0 0 1 0 0
// 1 1 1 1 1
// 0 0 1 0 0
// 0 0 1 0 0
// const n =7;
// const mid = Math.round(n/2);
// for(var i=1; i<=n; i++){
//     var res = "";
//     for(var j=1; j<=n;  j++){
//         if(i  === mid || j === mid){
//             res+="1 "
//         }else{
//             res+="0 "
//         }
//     }
//     console.log(res);
// }

//! 11.
// 1 1 0 1 1
// 1 1 0 1 1
// 1 1 0 1 1
// 0 0 1 0 0
// 0 0 1 0 0

// const n = 5;
// const mid = Math.round(n / 2);
// for (var i = 1; i <= n; i++) {
//   var res = "";

//   if (i <= mid) {
//     for (var j = 1; j <= n; j++) {
//       if (j == mid) {
//         res += "0 ";
//       } else {
//         res += "1 ";
//       }
//     }
//   } else {
//     for (let j = 1; j <= n; j++) {
//       if (j == mid) {
//         res += "1 ";
//       } else {
//         res += "0 ";
//       }
//     }
//   }

//   console.log(res);
// }

//? OR

// const n=5;
// for(let i=1; i<=n; i++){
//     let row="";
//     for(let j=1; j<=n; j++){
//         if((i<= Math.round(n/2) && j !== Math.round(n/2)) || (i> Math.round(n/2) && j === Math.round(n/2))){
//             row+="1 "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//? Grid Value
// 11 12 13 14 15
// 21 22 23 24 25
// 31 32 33 34 35
// 41 42 43 44 45
// 51 52 53 54 55

//! 12.
// 0 0 0 1 1
// 0 0 0 1 1
// 0 0 0 1 1
// 1 1 1 0 0
// 1 1 1 0 0

// const n = 5;
// const mid = Math.round(n / 2);
// for (let i = 1; i <= n; i++) {
//   var res = "";
//   if (i <= mid) {
//     for (let j = 1; j <= n; j++) {
//       if (i <= mid && j <= mid) {
//         res += "0 ";
//       } else {
//         res += "1 ";
//       }
//     }
//   }else{
//     for (let j = 1; j <= n; j++) {
//       if (i > mid && j > mid) {
//         res += "0 ";
//       } else {
//         res += "1 ";
//       }
//     }
//   }

//   console.log(res);
// }

//? OR

// const n=5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=n; j++){
//         if((i<= Math.round(n/2) && j <= Math.round(n/2)) || (i> Math.round(n/2) && j> Math.round(n/2))){
//             row+="0 "
//         }else{
//             row+="1 "
//         }
//     }
//     console.log(row)
// }

//! 13
// 1  2  3  4  5
// 6  7  8  9  10
// 11 12 13 14 15
// 16 17 18 19 20
// 21 22 23 24 25

// const n =5;
// let ans =1;
// for(let i=1; i<=n; i++){
//     let res = "";
//     for(let j=1; j<=n; j++){
//     if(ans<10){
//         res+=ans+"  "
//     }else{
//         res+=ans+" "
//     }
//       ans++;
//     }
//     console.log(res);
// }

//! 14
// 0  1  0  1  0
// 0  4  0  16  0
// 0  9  0  81  0
// 0  16  0 256  0
// 0  25  0  625  0

// const n=5;
// for(let i=1; i<=n; i++){
//     let res = "";
//     for(let j=1; j<=n; j++){
//         if(j%2 == 0){
//             res+=i**j+"  "
//         }else{
//             res+="0 "
//         }
//     }
//     console.log(res)
// }

//! 15

// 1 1 1 1 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 0 0 0 1
// 1 1 1 1 1
// const n=5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=n; j++){
//         if((i==1) || (j==1) || (i == n) || (j==n) ){
//             row+="1 "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//! 16.

// 1 0 0 0 1
// 1 1 0 1 1
// 1 0 1 0 1
// 1 1 0 1 1
// 1 0 0 0 1

// const n=5;
// for(let i=1; i<=n; i++){
//     let row ="";
//     for(let j=1; j<=n; j++){
//         if( (j===1) ||  (j===n) || (i ===j) || ((i+j) === n+1)){
//             row+="1 "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//! 17.

// * 0 0 0 0
// * * 0 0 0
// * * * 0 0
// * * * * 0
// * * * * *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if( i>=j)
//            if(j<=i)
//             {
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//! 18

// * * * * *
// * * * * 0
// * * * 0 0
// * * 0 0 0
// * 0 0 0 0

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if( i+j<=n+1){
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//! 19

// 0 0 0 0 *
// 0 0 0 * *
// 0 0 * * *
// 0 * * * *
// * * * * *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if(i+j>=n+1){
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//! 20

// * * * * *
// 0 * * * *
// 0 0 * * *
// 0 0 0 * *
// 0 0 0 0 *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if(i<=j){
//             row+= "* "
//         }else{
//             row+="0 "
//         }
//     }
//     console.log(row)
// }

//! 21
// 0 0 * 0 0
// 0 * * * 0
// * * * * *
// 0 * * * 0
// 0 0 * 0 0

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=n;j++){
//         if(j==Math.round(n/2) || i==Math.round(n/2) || i %2 ==0 && j % 2 ==0 ){
//             row+= " * "
//         }

//         else{
//             row+=" 0 "
//         }
//     }
//     console.log(row)
// }

//? 01-Nov-2015

//! 22
// *
// * *
// * * *
// * * * *
// * * * * *

// const n=5
// for(let i=1;i<=n;i++){
//     row=""
//     for(let j=1;j<=i;j++){
//             row+= "* "
//     }
//     console.log(row)
// }

//! 23
// * * * * *
// * * * *
// * * *
// * *
// *

// const n=5
// for(let i=n;i>=1;i--){
//     row=""

//     for(let j=1;j<=i;j++){

//             row+= "* "
//     }
//     console.log(row)
// }
// ? Sol-2
// const n=5
// for(let i=1;i<=n;i++){
//     row=""

//     for(let j=1;j<=(n+1)-i;j++){

//             row+= "* "
//     }
//     console.log(row)
// }


//! 24
//         *
//       * *
//     * * *
//   * * * *
// * * * * *


// const n = 5;
// for (let i = 1; i <= n; i++) {
//   row = "";

//   for (let j = 1; j <= n; j++) {
//     if (i + j >= n + 1) {
//       row += "* ";
//     } else {
//       row += "  ";
//     }
//   }
//   console.log(row);
// }

//! 25

//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0
//  1  1  1  1  *  0  0  0  0


// const n = 5;
// for (let i = 1; i <= n; i++) {
//   row = "";
//   for (let j = 1; j < n * 2 ; j++) {
//     if (j < n) {
//       row += "1 ";
//     } else if (j > n) {
//       row += "0 ";
//     } else {
//       row += "* ";
//     }
//   }
//   console.log(row);
// }


//! Task - Day 4 

//! 26
// *
// * *
// * * *
// * * * *
// * * * * *
// * * * *
// * * *
// * *
// *

//! 27
//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *

//! 28

//           *
//         * * *
//     * * * * * *
//   * * * * * * * *
// * * * * * * * * * *

//! 29

// * * * * * * * * * *
//   * * * * * * * *
//     * * * * * *
//       * * * *
//          *

//! 30

//         *
//       * *
//     * * *
//   * * * *
// * * * * *
//   * * * *
//     * * *
//       * *
//         *
