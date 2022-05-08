const num = readline().split(" ");

for(let n in num)
	n = parseInt(n);

// console.log(num.sort().reverse()[0];

// min/max 함수가 있다
console.log(Math.max(...num));
