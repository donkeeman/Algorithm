const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const gradeMap = new Map([
    ["A+", 4.5],
    ["A0", 4.0],
    ["B+", 3.5],
    ["B0", 3.0],
    ["C+", 2.5],
    ["C0", 2.0],
    ["D+", 1.5],
    ["D0", 1.0],
    ["F", 0.0],
]);

let creditSum = 0;
let gradeSum = 0;

input.forEach(arr => {
	const [name, credit, grade] = arr.split(" ");
	if(grade !== "P"){
		creditSum += parseInt(credit) * gradeMap.get(grade);
		gradeSum += parseInt(credit);
	}
})

console.log(creditSum / gradeSum);