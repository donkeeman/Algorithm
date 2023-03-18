const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const isPalindrome = (str) => {
	for(let i = 0; i < parseInt(str.length / 2); i++){
		if(str[i] !== str[str.length - i - 1]){
			return 0;
		}
	}
	return 1;
}

console.log(isPalindrome(input));