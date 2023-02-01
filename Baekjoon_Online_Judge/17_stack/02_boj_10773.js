const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const stack = [];
input.forEach(num => {
	num = parseInt(num);
	if(num === 0){
		stack.pop();
	}
	else{
		stack.push(num);
	}
});

console.log(stack.reduce((a, c) => a + c, 0));