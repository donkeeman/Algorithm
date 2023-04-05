const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const factorial = (n) => {
	return n === 0 ? 1 : factorial(n - 1) * n;
}

console.log(factorial(input));