const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const answer = input.map(v => {
	const [n, m] = v.split(" ").map(v => parseInt(v));
	const factorial = [1];
	for(let i = 1; i<m + 1; i++){
		factorial.push(i * factorial[i - 1]);
	}
	// 나눗셈 했을 때 소수로 나오는 경우가 있어서 Math.round()를 해줘야 함
	// 또는 애초에 BigInt()로 해도 제대로 출력됨
	return Math.round(factorial[m] / factorial[n] / factorial[m - n]);
});

console.log(answer.join(" "));