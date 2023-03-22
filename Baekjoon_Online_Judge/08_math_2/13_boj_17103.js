const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => parseInt(v));

input.shift();

const sieve = Array(Math.max(...input) + 1).fill(true);
sieve[0] = sieve[1] = false;

for(let i = 2; i<Math.sqrt(sieve.length); i++){
	if(sieve[i]){
		for(let j = i + i; j<sieve.length; j += i){
			sieve[j] = false;
		}
	}
}

const result = input.map(n => {
	let count = 0;
	for(let i = 2; i<=n / 2; i++){
		sieve[i] && sieve[n - i] && count++;
	}
	return count;
});

console.log(result.join(" "));