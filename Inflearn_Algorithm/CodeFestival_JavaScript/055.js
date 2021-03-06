// 원반 개수
const n = parseInt(readline());

// A, B, C 세 개의 기둥이 있음
// 처음에는 A에 모든 원반이 있고, 최소 횟수로 C에 모든 원반을 옮겨야 함

// 재귀를 사용하는 경우 (route를 구하지 않는 경우)
// 최소 횟수 = A에 있는 n-1개의 원반을 B까지 옮기는 횟수 (hanoi(n-1))
// + A의 맨 마지막 원반을 C로 옮기는 횟수(1) 
// + B에 있는 n-1개의 원반을 C까지 옮기는 횟수 (hanoi(n-1))
// let hanoi = (n) => {
// 	if(n === 1){
// 		return 1; 
// 	}
// 	else{
// 		return hanoi(n-1)*2 + 1;
// 	}
// }

// 재귀를 사용하지 않는 경우 (route를 구하지 않는 경우)
// 점화식 -> hanoi(n) = 2**n - 1;
// let hanoi = (n) => {
// 	return 2**n - 1;
// }


// console.log(hanoi(n));

// 예제 코드
// 재귀를 사용하는 경우 (route도 구하는 경우)
const route = [];

// 원반 개수, 시작 기둥, 목표 기둥, 경유 기둥
function hanoi(num, start, end, temp){
	// 원판이 한 개일 때에는 바로 옮기면 됩니다.
	if(num === 1){
		route.push([start, end]);
		return NaN;
	}
	
	// 원반의 n-1개를 경유 기둥으로 옮기고
	hanoi(n-1, start, temp, end);
	// 가장 큰 원반은 목표 기둥으로
	route.push([start, end]);
	// 경유 기둥과 시작 기둥을 바꿉니다.
	hanoi(n-1, temp, end, start);
}

hanoi(3, "A", "B", "C");
console.log(route);
console.log(route.length);