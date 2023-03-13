const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(v => parseInt(v));
const result = Array(n).fill(0).map((v, i) => i + 1);
input.forEach(arr => {
	let temp = 0;
	const [start, end] = arr.split(" ").map(v => parseInt(v));
	temp = result[start - 1];
	result[start - 1] = result[end - 1];
	result[end - 1] = temp;
});

console.log(result.join(" "));