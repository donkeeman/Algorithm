const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [x, y, w, h] = input.split(" ").map(v => parseInt(v));

console.log(Math.min(x, y, w - x, h - y));