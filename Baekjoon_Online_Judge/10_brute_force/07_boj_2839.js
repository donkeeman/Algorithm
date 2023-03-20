const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const minCount = [];
for(let five = 0; five<=parseInt(input / 5); five++){
	if((input - five * 5) % 3 !== 0){
		continue;
	}
	minCount.push((input - five * 5) / 3 + five);
}

console.log(minCount.length > 0 ? Math.min(...minCount) : -1);