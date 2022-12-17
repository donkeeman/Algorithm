const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let reports = Array(30).fill(false);
input.forEach(n => reports[parseInt(n) - 1] = true);

const firstIndex = reports.indexOf(false) + 1;
const secondIndex = reports.indexOf(false, firstIndex) + 1;
console.log(firstIndex);
console.log(secondIndex);