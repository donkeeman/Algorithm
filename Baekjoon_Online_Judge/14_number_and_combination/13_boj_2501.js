const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, k] = input.split(" ").map(v => parseInt(v));
const divisors = new Set([1, n]);
for(let i = 2; i<=Math.sqrt(n); i++){
	if(!(n % i)){
		divisors.add(i);
		divisors.add(n / i);
	}
}
if(k > cds.size){
	console.log(0);
}
else{
	console.log([...divisors].sort((a, b) => a - b)[k - 1]);
}