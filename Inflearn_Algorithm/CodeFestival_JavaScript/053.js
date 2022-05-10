const bracket = readline();

let isCorrect = (str) => {
	// 문자열의 길이가 홀수이거나 빈 문자열이면 무조건 바르지 않음
	if(str.length === 0 || str.length % 2){
		return false;
	}
	else{
		// 문자열의 길이가 짝수라면 [], {}, ()를 있는 최대한 제거
		while(true){
			// 문자열 길이가 0이 된다면
			// [], {}, ()로 이루어져 있었음 -> true
			if(str.length === 0){
				return true;
			}
			// 문자열 길이가 0이 아니고, [], {}. ()가 문자열 안에 없다면
			// 괄호가 남았다는 의미이므로 올바르지 않음 -> false
			else if(str.search("[]") == -1 
			&& str.search("{}") == -1
			&& str.search("()") == -1){
				return false;
			}
			// [], {}, ()를 없앰
			// 괄호를 정규식에 사용할 때는 \를 붙여야 한다
			str = str.replace(/[\[\]|\{\}|\(\)]/g, "");
		}
	}
}
	
isCorrect(bracket) ? console.log("YES") : console.log("NO");