/*
quick sort
1. 리스트의 길이가 0 or 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는
2. 리스트의 원소 중 하나를 피봇으로 정한다.(대부분은 맨 첫 번째 원소를 피봇으로 함)
3. 피봇과 리스트의 원소의 크기를 비교하여 피봇보다 작은 원소의 리스트와 큰 원소의 리스트로 나눈다.
4. 각 부분 리스트를 재귀적으로 퀵 정렬을 이용해 정렬한다.
5. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
*/

function quickSort(arr){
	// 1번 과정
	if(arr.length <= 1){
		return arr;
	}
	
	// 배열의 첫 번째 원소를 피봇으로 정한다
	const pivot = arr[0];
	// 피봇보다 작은 원소가 들어갈 배열
	const left = [];
	// 피봇보다 큰 원소가 들어갈 배열
	const right = [];
	
	for(let i = 1; i<arr.length; i++){
		// 피봇보다 작으면 left, 크면 right에 push
		if(arr[i] < pivot){
			left.push(arr[i]);
		}
		else{
			right.push(arr[i]);
		}
	}
	// left와 right를 각각 함수에 넣는다(재귀)
	// 그리고 left+pivot+right 의 형태의 배열을 반환한다
	return quickSort(left.concat(pivot)).concat(quickSort(right));
}

// const array = prompt("배열을 입력하세요").split(" ").map(n => parseInt(n, 10));
const array = [3, 1, 2, 6, 4, 5];
console.log(quickSort(array));