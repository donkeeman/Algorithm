const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(v => parseInt(v));
const score = input[1].split(" ").map(v => parseInt(v)).sort((a, b) => b - a);
console.log(score[k - 1]);