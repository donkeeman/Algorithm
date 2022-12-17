const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numArray = input.map(v => parseInt(v)).sort((a, b) => a - b);
const sum = parseInt(numArray.reduce((a, c) => a + c, 0) / numArray.length);
const mid = numArray[parseInt(numArray.length / 2)];
console.log(sum);
console.log(mid);