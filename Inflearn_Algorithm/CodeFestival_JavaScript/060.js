const students = ["강은지", "강채연", "권윤일", "김민호", "김유정", "김진이",
					"김채리", "박지호", "박현서", "최성훈", "한지호", "홍유진"];

for(let i in students){
	console.log(`번호: ${parseInt(i)+1}, 이름: ${students[i]}`);
}