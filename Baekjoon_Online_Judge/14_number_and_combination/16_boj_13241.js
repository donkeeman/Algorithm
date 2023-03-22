const fs = require("fs");
const [a, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => parseInt(v));

let max = Math.max(a, b);
let min = Math.min(a, b);
while(min !== 0){
	let temp = max % min;
	max = min;
	min = temp;
}

console.log(a * b / max);