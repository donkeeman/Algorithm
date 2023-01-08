const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [n, m] = input.split(" ").map(v => parseInt(v));
const visited = Array(n).fill(false);
const answer = [];
getArray([]);
console.log(answer.join("\n"));

function getArray(arr){
	if(arr.length === m){
		answer.push(arr.join(" "));
		return;
	}
	for(let i = 0; i<n; i++){
		if(!visited[i]){
			visited[i] = true;
			getArray(arr.concat(i + 1));
			visited[i] = false;
		}
	}
}
