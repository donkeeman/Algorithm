const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
input = input.map(v => v.split(" ").map(v => parseInt(v)));
const result = input.map(([x1, y1, r1, x2, y2, r2]) => {
	if(x1 === x2 && y1 === y2){
		// 일치
		if(r1 === r2){
			return -1;
		}
		// 포함
		else{
			return 0;
		}
	}
	const distance = Math.sqrt(Math.abs(x1 - x2)**2 + Math.abs(y1 - y2)**2);
	const sum = r1 + r2;
	const diff = Math.abs(r1 - r2);
	// 외접, 내접
	if(distance === sum || distance === diff){
		return 1;
	}
	// 두 점에서 만남
	else if(distance < sum && distance > diff){
		return 2;
	}
	// 밖에서 안 만남, 안에서 안 만남
	else{
		return 0;
	}
});

console.log(result.join("\n"));