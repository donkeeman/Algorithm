const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numMap = new Map();
input[1].split(" ").forEach(v => numMap.set(v, numMap.has(v) ? numMap.get(v) + 1 : 1));
const result = input[3].split(" ").map(v => numMap.has(v) ? numMap.get(v) : 0);
console.log(result.join(" "));