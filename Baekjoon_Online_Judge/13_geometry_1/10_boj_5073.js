const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.pop();

const result = input.map(lines => {
	lines = lines.split(" ").map(v => parseInt(v)).sort((a, b) => a - b);
	if(lines[0] + lines[1] <= lines[2]){
		return "Invalid";
	}
	if(lines[0] === lines[1] && lines[1] === lines[2]){
		return "Equilateral";
	}
	if(lines[0] === lines[1] || lines[0] === lines[2] || lines[1] === lines[2]){
		return "Isosceles";
	}
	return "Scalene";
});

console.log(result.join("\n"));