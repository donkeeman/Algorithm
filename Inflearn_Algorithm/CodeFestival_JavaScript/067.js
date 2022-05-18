const n = parseInt(readline());

const sum = n => n*(n+1)/2;

let i = 1;

while(true){
	if(n >= sum(i) && n < sum(i+1)){
		// i+2를 출력하는 이유는 악수 횟수가 1 ~ i까지의 합이기 때문에
		// 민규를 제외한 실제 사람 수는 i+1명
		// 민규를 더하면 i+2명
		console.log(`[${n - sum(i)}, ${i+2}]`);
		break;
	}
	i++;
}