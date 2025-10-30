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

// for(var i=1; i<=5; i++){
//     var ans = "";
//     for(var j=1; j<=5; j++){
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
