const string = readline();

// array 이용하기
// split으로 문자열을 array로 만들고 reverse한 후 join
// 변수를 더 선언하지 않아도 됨
console.log(string.split("").reverse().join(""));

// 반복문 이용하기
// 새로운 문자열에 기존 문자열의 마지막 인덱스부터 하나씩 줄여나가면서 붙이기
// 직관적이긴 함
// let reverseString = "";
// for(let i = string.length-1; i>=0; i--)
// 	reverseString += string[i];

// console.log(reverseString);