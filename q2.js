// QNo 2. Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5

//                 *
//         *               *
// *                               *
//         *               *
//                 *


for(i=1;i<=5;i++){
    let star=" "
    for(j=1;j<=5;j++){
        if(i==1&& j==3 || i==2 && j==2 || i==2 && j==4 || i==3 && j==1 || i==3 && j==5 || i==4 && j==2 ||  i==4 && j==4  || i==5 && j==3){
            star+='   *   ';
        }else{
            star+='       ';
        }
    }
    console.log(star);
} 