const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const queue = [];
let [startIndex, endIndex] = [0, 0];
const result = [];

input.forEach(order => {
	const [keyword, num] = order.split(" ");
	switch(keyword){
		case "push":
			queue.push(num);
			endIndex++;
			break;
		case "pop":
			result.push(endIndex === startIndex ? -1 : queue[startIndex++]);
			break;
		case "size":
			result.push(endIndex - startIndex);
			break;
		case "empty":
			result.push(endIndex === startIndex ? 1 : 0);
			break;
		case "front":
			result.push(endIndex === startIndex ? -1 : queue[startIndex]);
			break;
		case "back":
			result.push(endIndex === startIndex ? -1 : queue[endIndex - 1]);
			break;
	}
})

console.log(result.join("\n"));