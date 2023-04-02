const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

let emoticon = 0;
let index = input.indexOf("ENTER");
while(index !== -1){
	let nextIndex = input.indexOf("ENTER", index + 1);
	emoticon += new Set(nextIndex === -1 ? input.slice(index + 1) : input.slice(index + 1, nextIndex)).size;
	index = nextIndex;
}

console.log(emoticon);