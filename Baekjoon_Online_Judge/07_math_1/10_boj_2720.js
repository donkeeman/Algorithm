const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => parseInt(v));

input.shift();
// q: 25, d: 10, n: 5, p: 1
const answer = input.map(p => {
	const q = parseInt(p / 25);
	p %= 25;
	const d = parseInt(p / 10);
	p %= 10;
	const n = parseInt(p / 5);
	p %= 5;
	return `${q} ${d} ${n} ${p}`;
})

console.log(answer.join("\n"));