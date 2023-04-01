const fs = require("fs");
let [n, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => parseInt(v));

// parseInt() 사용 시
console.log(n.toString(b).toUpperCase());

// 원래 방법
const numMap = new Map();
for(let i = 0; i<b; i++){
	numMap.set(i, i < 10 ? i.toString() : String.fromCharCode(i + 55));
}

let num = "";
while(n !== 0){
	num = numMap.get(n % b) + num;
	n = parseInt(n / b);
}

console.log(num);