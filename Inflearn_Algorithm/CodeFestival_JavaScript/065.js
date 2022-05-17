const a = [1, 2, 3, 4];
const b = ["a", "b", "c", "d"];

const twist = (list1, list2) => {
	if(list1.length !== list2.length)
		return;
	let newList = [];
	for(let i = 0; i<list1.length; i++){
		// 짝수 번째 인덱스는 a의 원소가 먼저
		if(i % 2 === 0){
			newList.push([a[i], b[i]]);
		}
		// 홀수 번째 인덱스는 b의 원소가 먼저
		else{
			newList.push([b[i], a[i]]);
		}
	}
	return newList;
}

// 배열 형태 그대로 대괄호까지 출력하려면 JSON.stringify()
console.log(JSON.stringify(twist(a, b)));