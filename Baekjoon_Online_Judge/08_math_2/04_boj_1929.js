const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [m, n] = input.split(" ").map(v => parseInt(v));

const sieve = Array(n + 1).fill(true);
sieve[0] = sieve[1] = false;
for(let i = 2; i<=Math.sqrt(n); i++){
	if(sieve[i]){
		for(let j = i + i; j<sieve.length; j+=i){
			sieve[j] = false;
		}
	}
	else{
		continue;
	}
}

const primes = [];
for(let i = m; i<sieve.length; i++){
	sieve[i] && primes.push(i);
}
console.log(primes.join(" "));