const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
const arr = input.map(v => v.split(" ").map(v => parseInt(v)));
for(let i = 0; i<arr.length; i++){
	let rank = 1;
	for(let j = 0; j<arr.length; j++){
		if(i === j){
			continue;
		}
		if(arr[i][0] < arr[j][0] && arr[i][1] < arr[j][1]){
			rank++;
		}
	}
	console.log(rank);
}