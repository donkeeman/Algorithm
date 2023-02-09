const fs = require("fs");
const [str, word] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const stack = [];
for(let i = 0; i<str.length; i++){
	stack.push(str[i]);
	if(stack.length >= word.length && word === stack.slice(-word.length).join("")){
		for(let i = 0; i<word.length; i++){
			stack.pop();
		}
	}
}

stack.length === 0 ? console.log("FRULA") : console.log(stack.join(""));