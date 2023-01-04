const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const binarySearch = (key, start, end) => {
	if(end <= start){
		return 0;
	}
	if(numArray[start] === key || numArray[end] === key){
		return 1;
	}
	const mid = parseInt((start + end) / 2);
	if(key <= numArray[mid]){
		return binarySearch(key, start, mid);
	}
	else{
		return binarySearch(key, mid + 1, end);
	}
};

const numArray = input[1].split(" ").map(v => parseInt(v)).sort((a, b) => a - b);
const answer = input[3].split(" ").map(v => binarySearch(parseInt(v), 0, numArray.length - 1));

console.log(answer.join(" "));