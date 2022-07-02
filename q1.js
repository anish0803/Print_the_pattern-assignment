// QNo 1. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5

// *                 *
//      *        *
//          *
//      *        *
// *                 *


// let num = 5;

// for(let i = 1; i<=5; i++){
//   let stars = ``
//   for(let j = 1; j<=5; j++){
//   if(i==j || (i+j==6)){
//      stars += "  *  ";
//   }
//   else{
//     stars += "     "
//   }
  
  
//   }
//   console.log(stars)
// }

// -------------------->>------------

for (let i = 1; i <= 5; i++) {
  let stars = " ";
  for (let j = 1; j <= 5; j++) {
    if (i == j || i + j == 6) {
      stars += " * ";
    } else if (i != j) {
      stars += "   ";
    }
  }
  console.log(stars);
}
