const tower = ["ABCDEF", "BCAD", "ADEFQRX", "BEDFG", "EFGHZ"];
const rule = "ABD";

const checkOrder = (tower, rule) => {
	let isPossible = [];
	// 정규식 만드는 함수
	const pattern = new RegExp(`[^${rule}]`, "g");
	
	// tower에서 rule에 있는 알파벳 외의 문자를 제거
	tower = tower.map(x => x.replace(pattern, ""));
	console.log(tower);
	// 규칙과 맞는지 검사
	// 정규식을 어떻게 해야 할 지 모르겠음
	const newPattern =  new RegExp("A+(?=B*)D+");
	isPossible = tower.map(x => {
		if(x.length === 0 || x === rule || x.match(newPattern) !== null)
			return "possible";
		else{
			return "impossible";
		}
	});
	
	console.log(isPossible);
};

checkOrder(tower, rule);