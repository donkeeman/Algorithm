const alphabet = readline();

// isupper, islower 같은 알파벳 대소문자 체크 함수가 없다
// 그러므로 char를 대문자로 변환시켜서 그것과 같은지 아닌지 체크
alphabet === alphabet.toUpperCase() ? console.log("YES") : console.log("NO");