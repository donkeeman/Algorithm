const nums = readline().split(" ");
const a = parseInt(nums[0]);
const b = parseInt(nums[1]);
let result = 1;

// 정통 방법
// for(let i = 0; i<b; i++)
// 	result *= a;
	
// pow 메소드도 있음
result = Math.pow(a, b);

console.log(result);