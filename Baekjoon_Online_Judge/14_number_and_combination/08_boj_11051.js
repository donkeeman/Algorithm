const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let [n, k] = input.split(" ").map(v => parseInt(v));

const factorial = [BigInt(1)];

for(let i = 1; i<=n; i++){
	factorial.push(factorial[i - 1] * BigInt(i));
}

console.log(Number((factorial[n] / (factorial[k] * factorial[n - k])) % BigInt(10007)));