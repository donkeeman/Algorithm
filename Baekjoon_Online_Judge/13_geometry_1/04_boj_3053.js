const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const n = parseInt(input);
console.log(n ** 2 * Math.PI, n ** 2 * 2);