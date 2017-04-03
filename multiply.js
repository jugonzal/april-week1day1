// a program
// input: two numbers
// output: those same two numbers multiplied
// any tricks?  how to get the numbers from the command line ?

console.log("Hello! I will multiply your numbers...");

// console.log(process.argv);

// get the two numbers
console.log(process.argv[2]);
console.log(process.argv[3]);

var number1 = process.argv[2];
var number2 = process.argv[3];

// I should multiply them
// show the results
console.log(number1 * number2);

