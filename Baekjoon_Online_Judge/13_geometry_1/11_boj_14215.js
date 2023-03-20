const fs = require("fs");
const [min1, min2, max] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => parseInt(v)).sort((a, b) => a - b);

console.log(min1 + min2 + Math.min(min1 + min2 - 1, max));