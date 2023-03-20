const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
let [minX, minY, maxX, maxY] = [10001, 10001, -10001, -10001];
input.forEach(arr => {
	const [x, y] = arr.split(" ").map(v => parseInt(v));
	minX = Math.min(minX, x);
	minY = Math.min(minY, y);
	maxX = Math.max(maxX, x);
	maxY = Math.max(maxY, y);
});

console.log((maxX - minX) * (maxY - minY));