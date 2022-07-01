// Qno 4: Print Fibonacci series in this order
// Input
// You will be given a number n
// 1 <= n <= 100
// Output
// Print the following pattern
// Sample Output:
// For n = 5

// 0
// 1 1
// 2 3 5
// 8 13 21 34
// 55 89 144 233 377

let a=0;
let b=1;

for(i=a;i<=5;i++){
    let star="";
    for(j=1;j<=i;j++){ 
       
        let c=a+b 
        star+=` ${a}` 
        a=b;
        b=c
      
    }
    console.log(star);
}