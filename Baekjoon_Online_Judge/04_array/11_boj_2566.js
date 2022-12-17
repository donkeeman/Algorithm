const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const row = input.length;

const numbers = input.map(v => v.split(" ").map(v => parseInt(v))).flat();
const maxNum = Math.max(...numbers);
const maxIndex = numbers.indexOf(maxNum);
console.log(maxNum)
console.log(`${parseInt(maxIndex / row) + 1} ${maxIndex % row + 1}`);