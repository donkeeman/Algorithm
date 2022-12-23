const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const getGCD = (n1, n2) => {
	let [max, min] = [Math.max(n1, n2), Math.min(n1, n2)];
	while(min !== 0){
		let temp = max % min;
		max = min;
		min = temp;
	}
	return max;
};

input.shift();
input = input.map(v => parseInt(v));
// a와 b를 m으로 나눈 나머지가 각각 같으면 a = 몫1 * m + 나머지, b = 몫2 * m + 나머지 형식
// a - b = (몫1 - 몫2) * m이 되므로 a - b는 m의 배수가 됨
// 그러므로 a - b들끼리의 최대공약수가 m이 되고 그 최대공약수의 약수들을 출력해야 함
const subs = [];
for(let i = 0; i<input.length - 1; i++){
	subs.push(Math.abs(input[i] - input[i + 1]));
}
let gcd = subs[0];
// 여러 개의 수의 최대공약수를 구하기
// 이전 두 개의 최대공약수와 다음 수, 이전 세 개의 최대공약수와 다음 수... 반복
if(subs.length !== 1){
	for(let i = 1; i<subs.length; i++){
		gcd = getGCD(gcd, subs[i]);
	}
}
const result = new Set();
for(let i = 2; i<=Math.sqrt(gcd); i++){
	if(!(gcd % i)){
		result.add(i);
		result.add(gcd / i);
	}
}
console.log([...result, gcd].sort((a, b) => a - b).join(" "));