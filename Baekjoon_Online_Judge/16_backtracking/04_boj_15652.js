const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const backtracking = (num, cur, arr) => {
	if(arr.length === m){
		answer.push(arr.join(" "));
		return;
	}
	for(let i = 1; i<num + 1; i++){
		if(i >= cur){
			backtracking(num, i, arr.concat(i));
		}
	}
}

const answer = [];
const [n, m] = input.split(" ").map(v => parseInt(v));
backtracking(n, 1, []);

console.log(answer.join("\n"));