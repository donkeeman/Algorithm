let numStr = "";
let sum = 0;

for(let i = 0; i<20; i++)
	numStr += i+1;

for(let i = 0; i<numStr.length; i++)
	sum += parseInt(numStr[i]);

console.log(sum);