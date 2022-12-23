const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
const result = input.map(v => {
	const [n1, n2] = v.split(" ").map(v => parseInt(v));
	return !(n1 % n2) ? "multiple" : !(n2 % n1) ? "factor" : "neither";
})

console.log(result.join("\n"));