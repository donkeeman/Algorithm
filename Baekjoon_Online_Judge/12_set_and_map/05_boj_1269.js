const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const numberMap = new Map();
const arr = (input[1] + " " + input[2]).split(" ");
arr.forEach(v => numberMap.set(v, numberMap.has(v) ? numberMap.get(v) + 1 : 1));
console.log([...numberMap.values()].filter(v => v === 1).length);