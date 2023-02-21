const fs = require("fs");
const input = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const recurFib = (n, count) => {
	count++;
	if(n <= 2){
		return 1;
	}
	else{
		return recurFib(n - 2, count) + recurFib(n - 1, count);
	}
}

const dpFib = (n) => {
	let count = 0;
	let [prev1, prev2, num] = [1, 1, 0];
	for(let i = 3; i<=n; i++){
		count++;
		num = prev1 + prev2;
		prev1 = prev2;
		prev2 = num;
	}
	return count;
}

console.log(recurFib(input, 0), dpFib(input));