const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, k] = input.split(" ").map(v => parseInt(v));

// 2와 5의 개수를 각각 세면 시간 초과
// num까지의 2의 배수, 2^2의 배수... 의 개수와 5의 배수, 5^2의 배수... 의 개수를 세야 함
// 각각의 개수는 num을 2의 배수, 2^2의 배수... 로 나눈  정수 몫
const getZeroCount = (num) => {
	let [two, five] = [2, 5];
	let [twoCount, fiveCount] = [0, 0];
	while(two <= num){
		twoCount += parseInt(num / two);
		two *= 2;
	}
	while(five <= num){
		fiveCount += parseInt(num / five);
		five *= 5;
	}
	return [twoCount, fiveCount];
}

const nCount = getZeroCount(n);
const kCount = getZeroCount(k);
const nkCount = getZeroCount(n - k);

console.log(Math.min(nCount[0] - kCount[0] - nkCount[0], nCount[1] - kCount[1] - nkCount[1]));