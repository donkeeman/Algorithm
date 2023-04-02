const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const dancing = new Set(["ChongChong"]);

input.forEach(names => {
	const [name1, name2] = names.split(" ");
	dancing.has(name1) && dancing.add(name2);
	dancing.has(name2) && dancing.add(name1);
});

console.log(dancing.size);