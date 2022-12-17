const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const count = input.shift();
const num = parseInt(input.pop());
const numArray = input[0].split(" ").map(v => parseInt(v));
console.log(numArray.filter(n => n === num).length);