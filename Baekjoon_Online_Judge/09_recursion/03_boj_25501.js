const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const isPalindrome = (str, startIndex, endIndex, count) => {
	if(startIndex >= endIndex){
		return `1 ${count}`;
	}
	if(str[startIndex] !== str[endIndex]){
		return `0 ${count}`;
	}
	else{
		return isPalindrome(str, startIndex + 1, endIndex - 1, count + 1);
	}
};

input.shift();
input.forEach(v => console.log(isPalindrome(v, 0, v.length - 1, 1)));