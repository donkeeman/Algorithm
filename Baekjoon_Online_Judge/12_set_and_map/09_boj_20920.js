const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ");
const wordMap = new Map();
input.forEach(word => {
	word.length >= parseInt(m) && wordMap.set(word, wordMap.has(word) ? wordMap.get(word) + 1 : 1);
});

const answer = Array.from(wordMap.keys()).sort((a, b) => {
	if(wordMap.get(a) === wordMap.get(b)){
		if(a.length === b.length){
			return a < b ? -1 : 1;
		}
		else{
			return b.length - a.length;
		}
	}
	else{
		return wordMap.get(b) - wordMap.get(a);
	}
});

console.log(answer.join("\n"));