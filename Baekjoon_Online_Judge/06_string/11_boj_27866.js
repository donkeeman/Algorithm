const fs = require("fs");
const [str, n] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

console.log(str[parseInt(n) - 1]);