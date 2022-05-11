const countOne = (start, end) => {
	let count = 0;
	let numStr = "";
	for(let i = start; i<=end; i++){
		numStr += i;
	}
	
	// 숫자 문자열을 한 글자씩 나눈 배열로 변환(split)
	// -> 그 배열의 원소가 "1"과 같은 경우만 리턴한 배열 새로 생성(filter)
	// -> 콤마 없애고 string으로 변환(join)
	// string의 길이 구함(length)
	return numStr.split("").filter(x => x === "1").join("").length;
	
}

console.log(countOne(0, 20));