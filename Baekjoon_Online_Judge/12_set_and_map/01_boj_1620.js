const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [pokeNum, quizNum] = input.shift().split(" ").map(v => parseInt(v));
const pokeListIndex = new Map();
const pokeListName = new Map();
input.slice(0, pokeNum).forEach((v, i) => {
	pokeListIndex.set(i + 1, v);
	pokeListName.set(v, i + 1);
})
input.slice(-quizNum).forEach(v => {
	if(Number.isNaN(parseInt(v))){
		console.log(pokeListName.get(v));
	}
	else{
		console.log(pokeListIndex.get(parseInt(v)));
	}
});