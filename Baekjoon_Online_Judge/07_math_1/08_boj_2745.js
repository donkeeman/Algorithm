const fs = require("fs");
let [n, b] = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

// parseInt() 사용 시
console.log(parseInt(n, +b));

// 원래 방법
const numMap = new Map();
for(let i = 0; i<b; i++){
	numMap.set(i < 10 ? i.toString() : String.fromCharCode(i + 55), i);
}

let decimal = 0;
for(let i = 0; i<n.length; i++){
	decimal += numMap.get(n[n.length - i - 1]) * (b ** i);
}
console.log(decimal);