const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => parseInt(v));

input.shift();

const isPrime = (n) => {
	if(n < 2){
		return false;
	}
	for(let i = 2; i<=Math.sqrt(n); i++){
		if(n % i === 0){
			return false;
		}
	}
	return true;
};

const result = input.map(n => {
	while(true){
		if(isPrime(n)){
			break;
		}
		else{
			n++;
		}
	}
	return n;
})

console.log(result.join(" "));