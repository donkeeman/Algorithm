const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => parseInt(v));

const getGcd = (num1, num2) => {
	let max = Math.max(num1, num2);
	let min = Math.min(num1, num2);
	while(min !== 0){
		let temp = max % min;
		max = min;
		min = temp;
	}
	return max;
}

input.shift();
const distance = [];
for(let i = 0; i<input.length - 1; i++){
	distance.push(input[i+1] - input[i]);
}

let gcd = distance[0];
for(let i = 1; i<distance.length; i++){
	gcd = getGcd(gcd, distance[i]);
}

console.log(distance.reduce((a, c) => a + c/gcd - 1, 0));