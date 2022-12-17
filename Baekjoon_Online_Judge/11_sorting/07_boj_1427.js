const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

console.log(input.split("").map(v => parseInt(v)).sort((a, b) => b - a).join(""));