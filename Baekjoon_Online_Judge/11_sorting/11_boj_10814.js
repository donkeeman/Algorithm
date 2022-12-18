const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();
input.sort((a, b) => {
	const [age1, name1] = a.split(" ");
	const [age2, name2] = b.split(" ");
	if(parseInt(age1) < parseInt(age2)){
		return -1;
	}
	else if(parseInt(age1) > parseInt(age2)){
		return 1;
	}
	else{
		return 0;
	}
})

console.log(input.join("\n"));