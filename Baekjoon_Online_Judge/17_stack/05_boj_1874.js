const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n").map(v => parseInt(v));

const n = input.shift();

const stack = [];
const result = [];
let num = 1;
let index = 0;
while (index < n) {
    if (stack[stack.length - 1] === input[index]) {
        result.push("-");
        stack.pop();
        index++;
    } else {
        if (num > n) {
        	break;
        }
        result.push("+");
        stack.push(num++);
    }
}

if(stack.length === 0){
	console.log(result.join(" "));
}
else{
	console.log("NO");
}