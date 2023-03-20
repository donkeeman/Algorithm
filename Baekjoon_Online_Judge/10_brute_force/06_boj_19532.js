const fs = require("fs");
const [a, b, c, d, e, f] = fs.readFileSync("/dev/stdin").toString().trim().split(" ").map(v => parseInt(v));

if(a === 0){
	console.log((f-e*c/b)/d, c/b);
}
else if(b === 0){
	console.log(c/a, (f-d*c/a)/e);
}
else if(d === 0){
	console.log((c-b*f/e)/a, f/e);
}
else if(e === 0){
	console.log(f/d, (c-a*f/d)/b);
}
else{
	for(let y = -999; y <= 999; y++){
		if(y === (c*d - f*a) / (b*d - e*a)){
			console.log((f - e * y) / d, y);
			break;
		}
	}
}