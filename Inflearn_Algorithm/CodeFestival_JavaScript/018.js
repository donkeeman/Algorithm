const grades = readline().split(" ");
let sum = 0;

for(let i = 0; i<grades.length; i++)
	sum += parseInt(grades[i]);
	
console.log(sum / grades.length);