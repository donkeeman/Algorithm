const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const sorted = Array.from(new Set(input)).sort((word1, word2) => {
	if(word1.length === word2.length){
		if(word1 < word2){
			return -1;
		}
		else if(word1 > word2){
			return 1;
		}
	}
	else{
		return word1.length - word2.length;
	}
});

console.log(sorted.join("\n"));