const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(v => parseInt(v));
const result = Array(n).fill(0);

input.forEach(arr => {
	const [start, end, count] = arr.split(" ").map(v => parseInt(v));
	for(let i = start - 1; i<end; i++){
		result[i] = count;
	}
});

console.log(result.join(" "));