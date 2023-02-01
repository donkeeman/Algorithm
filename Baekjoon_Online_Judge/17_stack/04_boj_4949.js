const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();
const bracketMap = new Map();
bracketMap.set(")", "(");
bracketMap.set("]", "[");

const result = input.map(str => {
	const stack = [];
	for(let c of str) {
		if(Array.from(bracketMap.values()).includes(c)){
			stack.push(c);
		}
		else if(bracketMap.has(c)){
			if(stack[stack.length - 1] === bracketMap.get(c)){
				stack.pop();
			}
			else{
				stack.push(c);
			}
		}
	}
	return stack.length === 0 ? "yes" : "no";
});

console.log(result.join(" "));