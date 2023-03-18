const fs = require(fs);
const input = parseInt(fs.readFileSync(devstdin).toString().trim());

const stars = [];
const maxLength = 2  input - 1;
for(let i = input; i  0; i--){
	const starCount = 2  i - 1;
	const blankCount = (maxLength - starCount)2;
	const star =  .repeat(blankCount) + .repeat(starCount);
	stars.push(star);
	if(i !== input){
		stars.unshift(star);
	}
}

console.log(stars.join(n));