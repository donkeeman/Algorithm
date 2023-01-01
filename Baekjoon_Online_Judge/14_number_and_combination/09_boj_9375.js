const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const answer = [];
const n = input.shift();
let index = 0;
for(let i = 0; i < n; i++){
	const clothMap = new Map();
	const count = parseInt(input[index++]);
	const clothes = input.slice(index, index + count).map(arr => arr.split(" "));
	clothes.forEach(([cloth, parts]) => clothMap.set(parts, clothMap.has(parts) ? clothMap.get(parts)+1 : 1));
	const values = Array.from(clothMap.values());
	answer.push(values.reduce((a, b) => a * (b + 1), 1) - 1);
	index += count;
}
console.log(answer.join(" "));