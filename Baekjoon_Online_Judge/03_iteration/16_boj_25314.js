const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString());

let str = "int";
for(let i = 0; i<input; i+=4){
	str = "long " + str;
}

console.log(str);