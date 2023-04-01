const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

console.log(((2**input)+1)**2);