const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
// 원본 배열을 유지하고 누적합 배열을 새로 만드는 경우
// const numArr = input.shift().split(" ").map(v => parseInt(v));
// const sum = [0];
// for(let i = 0; i<numArr.length; i++){
// 	sum[i+1] = numArr[i] + sum[i];
// }
// const result = input.map(v => {
// 	const [i, j] = v.split(" ").map(n => parseInt(n));
// 	return sum[j] - sum[i - 1];
// })

// 원본 배열을 누적합 배열로 만드는 경우
let numArr = [0].concat(input.shift().split(" ").map(v => parseInt(v)));
for(let i = 1; i<numArr.length; i++){
	numArr[i] += numArr[i-1];
}
const result = input.map(v => {
	const [i, j] = v.split(" ").map(n => parseInt(n));
	return numArr[j] - numArr[i - 1];
})
console.log(result.join(" "));