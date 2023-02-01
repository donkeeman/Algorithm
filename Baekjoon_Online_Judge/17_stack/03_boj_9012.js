const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const result = input.map(brackets => {
	const stack = [];
	for(let c of brackets) {
		if(c === ")" && stack[stack.length - 1] === "("){
			stack.pop();
		}
		else{
			stack.push(c);
		}
	}
	return stack.length === 0 ? "YES" : "NO";
});

console.log(result.join(" "));