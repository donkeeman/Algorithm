const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const getGCD = (n1, n2) => {
	let [max, min] = [Math.max(n1, n2), Math.min(n1, n2)];
	while(min !== 0){
		let temp = max % min;
		max = min;
		min = temp;
	}
	return max;
};

const rings = input[1].split(" ");
const first = parseInt(rings.shift());
const result = rings.map(v => {
	v = parseInt(v);
	const gcd = getGCD(v, first);
	return `${first/gcd}/${v/gcd}`;
});
console.log(result.join(" "));
