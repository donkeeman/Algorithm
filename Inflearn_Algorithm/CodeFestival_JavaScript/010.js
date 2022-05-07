// readline()은 한 줄을 읽어오기 때문에 input을 무조건 string으로 읽어옴

// prompt는 웹 상에서의 input을 받는데 console에서의 input을 받을 때 타입을 유지하면서 받을 방법이 있는지?

// printf나 buffer처럼 시간단축하는 입력 출력 방법이 있는지?

// array.reverse(): 배열의 원소를 역순으로 정렬
// array.join(c): c를 파라미터로 하여 배열의 원소를 하나의 문자열로 만듦(arr = [x, y, z]이면 arr.join("") = xyz, arr.join(".") = x.y.z)
const n = parseInt(readline());

let starArr;

for(let i = 0; i<5; i++){
	starArr = [];
	for(let j = 0; j<4; j++){
		j >= 4-i ? starArr.push("*") : starArr.push(" ");
	}
	console.log(starArr.join("") + "*" + starArr.reverse().join(""));
}


// string에는 reverse 함수가 내장되어 있지 않음

const n = parseInt(readline());

let starString;
 for(let i = 0; i < n; i++){
	starString = "";
	for(let j = 0; j < n*2-1; j++){
		starString += j >= n - i - 1 && j < n + i ? "*" : " ";
	}
	console.log(starString);
}