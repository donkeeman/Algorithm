const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const divisors = input[1].split(" ").map(v => parseInt(v));
console.log(Math.min(...divisors) * Math.max(...divisors));