const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => parseInt(v));

input.pop();
const result = input.map(n => {
	let divisors = new Set([1]);
	for(let i = 2; i<=Math.sqrt(n); i++){
		if(!(n % i)){
			divisors.add(i);
			divisors.add(n / i);
		}
	}
	divisors = [...divisors].sort((a, b) => a - b);
	return n === divisors.reduce((a, c) => a + c, 0) ? `${n} = ${divisors.join(" + ")}` : `${n} is NOT perfect.`;
})

console.log(result.join("\n"));