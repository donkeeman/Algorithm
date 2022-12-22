const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const stringMap = new Set();
for(let i = 0; i<input.length; i++){
	for(let j = i; j<input.length; j++){
		stringMap.add(input.slice(i, j + 1));
	}
}

console.log(stringMap.size);