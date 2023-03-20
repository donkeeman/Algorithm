const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const sum = input.reduce((a, c) => a + parseInt(c), 0);

if(sum !== 180){
	console.log("Error");
}
else if(input[0] === input[1] && input[1] === input[2]){
	console.log("Equilateral");
}
else if(input[0] === input[1] || (input[0] === input[2] || input[1] === input[2])){
	console.log("Isosceles");
}
else{
	console.log("Scalene");
}