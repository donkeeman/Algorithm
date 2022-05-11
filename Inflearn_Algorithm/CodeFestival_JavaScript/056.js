const nationWidth = {
	"Korea": 220877,
	"Russia": 17098242,
	"China": 9596961,
	"France": 543965,
	"Japan": 377915,
	"England": 242900,
}

let minIndex = 0;
let sub = nationWidth.Korea;
// 객체의 함수 응용 없이 무작정 짜기
for(let i = 1; i<Object.entries(nationWidth).length; i++){
	if(Math.abs(Object.values(nationWidth)[i] - nationWidth.Korea) < sub){
		sub = Math.abs(Object.values(nationWidth)[i] - nationWidth.Korea);
		minIndex = i;
	}
}

console.log(`${Object.keys(nationWidth)[minIndex]} ${sub}`);

// console.log(nation.join(" "));