const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

// 피보나치와 같은 규칙
let [prev1, prev2, num] = [0, 1, 0];

for(let i = 1; i<=input; i++){
	num = (prev1 + prev2) % 15746;
	prev1 = prev2;
	prev2 = num;
}

console.log(num);