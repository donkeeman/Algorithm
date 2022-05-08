const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const a = parseInt(readline());
const b = parseInt(readline());

// 1월 1일이 시작일
let days = 0;

// 직전 달까지의 일수를 더해준다
for(let i = 0; i<a; i++)
	days += month[i];

// 일수를 더하되 당일은 세지 않으므로 하루를 뺀다
days += b - 1;

// 1월 1일이 수요일이므로 수요일부터 시작
switch(days % 7){
	case 0:
		console.log("WED");
		break;
	case 1:
		console.log("THU");
		break;
	case 2:
		console.log("FRI");
		break;
	case 3:
		console.log("SAT");
		break;
	case 4:
		console.log("SUN");
		break;
	case 5:
		console.log("MON");
		break;
	case 6:
		console.log("TUE");
		break;
}