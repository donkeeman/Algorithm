const num = readline().split(" ").map(x => parseInt(x));

const isContinuous = (array) => {
	for(let i = 1; i<array.length; i++){
		if(array[i] - array[i-1] != 1){
			return false;
		}
	}
	return true;
}

isContinuous(num) ? console.log("YES") : console.log("NO");