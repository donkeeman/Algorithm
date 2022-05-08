const string = readline();
// 원본 문자열을 변경해야 하는 경우엔 split과 join을 이용해야 함
// string에는 인덱스로 replace 하는 함수가 없다
// 원본 문자열을 변경하고 싶지 않은 경우
let result = "";

// isupper, islower 대신 원본 문자와 그 문자를 대문자화 한 것이 같은지 다른지를 비교
for(let i = 0; i<string.length; i++){
	if(string[i] !== string[i].toUpperCase())
		result += string[i].toUpperCase();
	else
		result += string[i].toLowerCase();
}
console.log(result);