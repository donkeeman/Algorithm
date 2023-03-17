const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const result = input.map(str => str[0] + str[str.length - 1]);
console.log(result.join(" "));