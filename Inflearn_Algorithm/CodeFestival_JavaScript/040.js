const weight = parseInt(readline());
const n = parseInt(readline());

let sum = 0;

for(let i = 0; i<n; i++){
	sum += parseInt(readline());
	if(sum > weight){
		console.log(i);
		break;
	}
}