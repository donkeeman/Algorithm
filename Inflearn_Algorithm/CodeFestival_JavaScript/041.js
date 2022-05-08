// 소수 판별: 자신의 제곱근보다 작은 정수를 루프하면서 그 중에 약수가 없다면 소수
// 또는 에라토스테네스의 체 사용
// 주어지는 수의 범위가 작으면 반복문으로, 범위가 크면 에라토스테네스의 체로

const num = parseInt(readline());

if(num === 0 || num === 1)
	console.log("NO");
else{
	// 반복문
	// let isPrime = true;

	// for(let i = 2; i<Math.sqrt(num)+1; i++){
	// 	if(num % i === 0){
	// 		isPrime = false;
	// 		break;
	// 	}
	// }
	
	// isPrime ? console.log("YES") : console.log("NO");
	
	// 2~100까지의 에라토스테네스의 체
	// 각 수를 인덱스로 한 배열을 만들고, 인덱스가 소수이면 값은 true
	// 처음엔 모두 true로 초기화 시킨 후, 소수의 배수들을 false로 만든다
	let era = [];
	for(let i = 0; i<101; i++){
		era.push(1);
	}
	
	// 0과 1은 false 처리
	era[0] = 0;
	era[1] = 0;
	
	for(let i = 2; i<era.length+1; i++){
		// era[i]가 true -> i는 소수이므로
		if(era[i]){
			for(let j = i; j<era.length+1; j+=i){
				// i 자기 자신을 제외한 i의 배수를 false로 변경
				if(j / i !== 1)
					era[j] = 0;
			}
		}
	}
	
	// num을 인덱스로 한 배열의 값이 true이면 num은 소수
	era[num] ? console.log("YES") : console.log("NO");
}