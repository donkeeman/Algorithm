const name = readline().split(" ");
const grade = readline().split(" ");

let result = {};

// object에 key-value pair 추가하려면 obj[key] = value;

for(let i = 0; i<name.length; i++)
	result[name[i]] = parseInt(grade[i]);

// object를 json 형식으로 출력하려면 JSON.stringify()
console.log(JSON.stringify(result));