const n = parseInt(readline());

let result = "";

for(let i = 0; i<9; i++){
	result += n*(i+1) + " ";
}

console.log(result);