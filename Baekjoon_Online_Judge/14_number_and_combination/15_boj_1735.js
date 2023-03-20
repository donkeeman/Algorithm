const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split(/\n| /).map(v => parseInt(v));

const getGcd = (num1, num2) => {
	let max = Math.max(num1, num2);
	let min = Math.min(num1, num2);
	while(max !== 0){
		let temp = min % max;
		min = max;
		max = temp;
	}
	return min;
};

for(let i = 0; i<3; i+=2) {
	const gcd = getGcd(input[i], input[i + 1]);
	input[i] /= gcd;
	input[i + 1] /= gcd;
}
const numerator = input[0] * input[3] + input[1] * input[2];
const denominator = input[1] * input[3];
const gcd = getGcd(numerator, denominator);
console.log(`${numerator / gcd} ${denominator / gcd}`);