// one이 two를 반환한다는 것은 재귀함수 의미가 아니라 two의 반환값을 리턴한다는 것?
// 시간 단축할 방법이 무조건 있음
function one(n){
	function two(x){
		let result = 1;
		for(let i = 0; i<n; i++)
			result *= x;
		return result;
	}
	return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));