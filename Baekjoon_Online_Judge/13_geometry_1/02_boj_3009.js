const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const findPoint = (arr) => {
	if(arr[0] === arr[1]){
		return arr[2];
	}
	else if(arr[1] === arr[2]){
		return arr[0];
	}
	else{
		return arr[1];
	}
}

const xArray = [];
const yArray = [];
input.forEach(v => {
	const arr = v.split(" ");
	xArray.push(arr[0]);
	yArray.push(arr[1]);
});

console.log(findPoint(xArray), findPoint(yArray));
