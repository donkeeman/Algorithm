const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const getGCD = (max, min) => {
	while(min !== 0){
		let temp = max % min;
		max = min;
		min = temp;
	}
	return max;
}

const [n1, n2] = input.split(" ").map(v => parseInt(v)).sort((a, b) => b - a);
const gcd = getGCD(n1, n2);
console.log(gcd, n1 * n2 / gcd);