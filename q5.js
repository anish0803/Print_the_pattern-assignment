// Qno 5: Print the following Pattern.
// Input
// You will be given a number n
// 1 <= n <= 10
// Also, n is odd.
// Output
// Print the following pattern
// Sample Output:
// For n = 5

//         1
//     2   3   2
// 3   4   5   4   3
//     2   3   2
//         1

for(let i=3;i>=1;i--){
    let star= '';
    for(j=1;j<=3;j++){

    
    star =star + '';
  
}
let k=i;
for(m=1;m<=i;m++){
    star= star+k++;
}
k=k-2;
for(let m=1;m<=i;m++){
    star= star+k--;
}
console.log(star);
}