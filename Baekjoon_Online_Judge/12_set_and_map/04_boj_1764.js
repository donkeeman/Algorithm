const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(v => parseInt(v));

const personMap = new Map();
const notSeen = input.slice(0, n);
const notHeard = input.slice(-m);

if(n < m){
	notSeen.forEach(v => personMap.set(v, 1));
	const answer = notHeard.filter(v => personMap.get(v)).sort();
	console.log(answer.length + "\n" + answer.join(" "));
}
else{
	notHeard.forEach(v => personMap.set(v, 1));
	const answer = notSeen.filter(v => personMap.get(v)).sort();
	console.log(answer.length + "\n" + answer.join(" "));
}