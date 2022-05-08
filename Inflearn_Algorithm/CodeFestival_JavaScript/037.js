const names = readline().split(" ");

let countMap = {};

// countMap 오브젝트에 받아온 이름의 리스트의 원소들을 key 값으로 넣고
// 이름의 개수만큼 value를 증가
for(let i = 0; i<names.length; i++){
	if(!countMap[names[i]])
		countMap[names[i]] =  1;
	else
		countMap[names[i]]++;
}

// 최대 value를 가진 key 값 찾기
let maxKey = "";

for(let key in countMap){
	if(!countMap[maxKey])
		maxKey = key;
	else if(countMap[key] > countMap[maxKey])
		maxKey = key;
}

console.log(`${maxKey}(이)가 총 ${countMap[maxKey]}표로 반장이 되었습니다.`);