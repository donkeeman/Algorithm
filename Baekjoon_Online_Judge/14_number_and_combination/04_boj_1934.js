const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const getGCD = (max, min) => {
	while(min !== 0){
		let temp = max % min;
		max = min;
		min = temp;
	}
	return max;
};

input.shift();
const result = input.map(v => {
	const [n1, n2] = v.split(" ").map(v => parseInt(v)).sort((a, b) => b - a);
	return n1 === 1 ? n2 : n2 === 1 ? n1 : n1 * n2 / getGCD(n1, n2);
});

console.log(result.join("\n"));