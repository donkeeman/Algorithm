const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

console.log(input.reduce((a, c) => a + parseInt(c), 0));