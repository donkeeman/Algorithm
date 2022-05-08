let num = parseInt(readline());

// string은 reverse()가 없기 때문에 array로 만들고 나중에 join()해준다
let binary = [];

// 타입이 int로 고정되지 않고, 나눗셈을 하면 자꾸 float로 바뀌어 버리는 것에 주의
while(true){
	if(parseInt(num) === 0)
		break;
	binary.push(num % 2);
	num = parseInt(num / 2);
}

console.log(binary.reverse().join(""));