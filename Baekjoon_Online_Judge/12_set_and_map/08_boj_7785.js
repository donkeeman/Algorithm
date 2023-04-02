const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const company = new Set();

input.forEach(v => {
	const [name, status] = v.split(" ");
	switch(status){
		case "enter":
			company.add(name);
			break;
		case "leave": 
			company.delete(name);
			break;
	}
});

console.log(Array.from(company).sort().reverse().join(" "));