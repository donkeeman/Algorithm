const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [n, k] = input.split(" ").map(v => parseInt(v));
if(k === 0 || k === n){
	console.log(1);
}
else{
	k = Math.min(k, n - k);
	let [numerator, denominator] = [n, k];
	while(k > 1){
		numerator *= --n;
		denominator *= --k;
	}
	console.log(parseInt(numerator / denominator));
}