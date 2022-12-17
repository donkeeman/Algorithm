const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const count = new Map();
const sorted = input.map(v => {
	const n = parseInt(v);
	count.set(n, count.get(n) ? count.get(n) + 1 : 1);
	return n;
}).sort((a, b) => a - b);

const mean = Math.round(sorted.reduce((a, c) => a + c, 0) / sorted.length);
const median = sorted[parseInt(sorted.length / 2)];
const countArr = Array.from(count.entries()).sort((a, b) => b[1] - a[1]);
const maxCount = countArr[0][1];
const mode = countArr.filter(([num, count]) => count === maxCount).map(([num, count]) => num);
const range = sorted[sorted.length - 1] - sorted[0];

console.log(mean === -0 ? 0 : mean);
console.log(median);
console.log(mode.length === 1 ? mode[0] : mode.sort((a, b) => a - b)[1]);
console.log(range);