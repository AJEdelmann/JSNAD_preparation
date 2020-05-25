/* 
Write a program that accepts one or more numbers as command-line arguments  
and prints the sum of those numbers to the console (stdout).
*/ 

let res = 0;
for(let i=2; i<process.argv.length; i++) {
    res+=Number(arr[i]);
}

console.log(res);
// Output ex: ['node', '/path/to/your/baby.js', '1', '2', '3']