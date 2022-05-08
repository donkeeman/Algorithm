const grade = readline().split(" ");

for(let num in grade)
	num = parseInt(num);

// 성적 내림차순으로 정렬
grade.sort().reverse();

let rank = 1;
let count = 0;

for(let i = 0; i<grade.length-1; i++){
	// 3등까지 측정이 되면 인덱스를 저장하고 break
	if(rank > 3){
		count = i;
		break;
	}
	// 자신의 뒤의 점수와 같으면 continue
	if(grade[i] == grade[i+1])
		continue;
	// 다르면 등수 1 증가
	else
		rank++;
}

console.log(count);