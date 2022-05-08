const nums = readline().split(" ");

console.log(
	parseInt(nums[0] / parseInt(nums[1])) + " " + 
	parseInt(nums[0] % parseInt(nums[1]))
);