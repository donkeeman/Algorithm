/*
merge sort (divide and conquer)
1. 리스트의 길이가 0 or 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
*/

function mergeSort(arr){
	// 1번 과정
	if(arr.length <= 1){
		return arr;
	}
	// 배열의 길이의 절반만큼 배열을 두 개로 나눈다
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	
	// 나눈 후의 두 개의 배열을 각각 함수에 넣는다 (재귀)
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	// 정렬된 결과를 저장할 배열
	let result = [];
	// left와 right의 길이가 모두 0이 아닐 때 (둘 다 빈 배열이 아닐 때)
	while(left.length && right.length){
		// 둘의 맨 첫 번째 원소를 비교하여 작은 것을 result에 push
		if(left[0] < right[0]){
			result.push(left.shift());
		}
		else{
			result.push(right.shift());
		}
	}
	// 만약 한 쪽이라도 빈 배열이 된다면 나머지의 원소들은 이미 정렬된 것이므로
	// 차례대로 result에 넣어줌
	while(left.length){
		result.push(left.shift());
	}
	while(right.length){
		result.push(right.shift());
	}
	
	return result;
}

// const array = prompt("배열을 입력하세요").split(" ").map(n => parseInt(n, 10));
const array = [3, 5, 6, 2, 1 ,4];
console.log(mergeSort(array));