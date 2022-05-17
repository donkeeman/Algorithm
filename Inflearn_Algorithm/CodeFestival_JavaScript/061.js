const char = {};

const str = readline();

for(let c of str){
	if(c in char){
		char[c]++;
	}
	else{
		char[c] = 1;
	}
}

// Object.entries(obj) 메소드는 오브젝트의 키-값 쌍을 출력하므로
// 이걸 map과 join을 이용하여 한 줄의 문장으로 만들어서 출력  
console.log(Object.entries(char).map(x => x.join("")).join(""));
