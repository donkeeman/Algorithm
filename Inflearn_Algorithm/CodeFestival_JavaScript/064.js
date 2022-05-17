const n = parseInt(readline());

const count = (n) => {
	// 더 무거운 7kg부터 검사
	// n이 7의 배수이면 7로 나눈 몫 리턴
	if(n % 7 === 0){
		return n / 7;
	}
	// n이 7의 배수가 아니면
	else{
		// n과 가장 가까운 7의 배수를 뺀 값이 3의 배수인지 검사
		for(let i = parseInt(n/7); i>0; i--){
			// 만약 그렇다면 현재 인덱스와 뺀 값을 3으로 나눈 몫의 합을 리턴
			if((n - i*7) % 3 === 0){
				return i + (n - i*7) / 3;
			}
		}
		// 앞에서 리턴이 안 되었다면 7kg는 필요 없음
		// n이 3의 배수이면 3으로 나눈 몫 리턴
		if(n % 3 === 0){
			return n / 3;
		}
		// 앞에서 리턴이 안 되었다면 7과 3의 조합이 아니므로
		return -1;
	}
}

console.log(count(n));