const people = [
	("hojun", "01050442903"),
	("hosang", "01051442903"),
	("junho", "01050342904"),
	("hojun", "01050442903"),
	("jun", "01050412904"),
	("ho", "01050443904"),
	("hojun", "01050442903"),
];

// set은 map처럼 key-value 쌍으로 원소를 받지 않는다
// pair가 들어오면 첫 번째 인자만 받고 두 번째부터는 무시된다
// 그래서 문제에서도 인원 수만 구하라고 한 것 같다
const peopleSet = new Set(people);

// set은 length가 아니라 size로 원소 개수를 구한다
console.log(peopleSet.size);