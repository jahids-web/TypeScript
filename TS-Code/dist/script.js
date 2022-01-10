"use strict";
// Basis Types
let id = 5;
let company = 'Type Media';
let inPublished = true;
console.log("Hello World");
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'hello'];
//Tuple
let person = [1, 'Book', true];
//Tuple Array
let employee;
employee = [
    [1, 'C#'],
    [2, 'TS'],
    [3, 'NG']
];
//Union
let pid;
pid = '22';
//Enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["Up"] = 1] = "Up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.Left);
//functions
function addNum(x, y) {
    return x + y;
}
console.log(addNum(5, 5));
//Loops
var num = 5;
var i;
var factorial = 1;
for (i = num; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);
