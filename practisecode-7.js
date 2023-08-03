//Arrow function in javascript

const square = x => x*x;

let output1 = square(4);
console.log(output1);


// example -2
const sumOfTwoNumbers = (x,y) => x+y;

let output2 = sumOfTwoNumbers(3,5);
console.log(output2);


//example-3
const sum =(x,y) => {
    console.log(`adding ${x} and ${y}`);
    return x+y;
}
let output3 = sum(4,8)
console.log(output3);


//example-4
const sumAndDifference =(x,y) =>
({sum:x + y , difference: x - y});
let output4 = sumAndDifference(8,6)
console.log(output4);