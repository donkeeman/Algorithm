const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
const result = input.map(v => {
	const [max, s1, s2] = v.split(" ").map(v => parseInt(v)).sort((a, b) => b - a);
	return max**2 === s1**2 + s2**2 ? "right" : "wrong";
})
console.log(result.join("\n"));