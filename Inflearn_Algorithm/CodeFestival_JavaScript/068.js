const busTime = readline().replace(/[\[\]\":]/g, "").split(", ");
const currentTime = readline().replace(/[\":]/g, "");

let result = [];

// 출력하고 싶은 자리수만큼 0을 숫자의 앞에 이어 붙인 다음
// 뒤에서부터 그 자리수만큼 잘라주면 남은 자리에는 0이 채워진다
// 시간, 분은 두 자리를 넘지 않으므로 두 개
const zeroPad2 = n => ("00"+n).slice(-2);

for(let time of busTime){
	if(currentTime > time){
		result.push("지나갔습니다");
	}
	else{
		let remainHour = parseInt(time.slice(0, 2)) - parseInt(currentTime.slice(0, 2));
		let remainMinute = parseInt(time.slice(2)) - parseInt(currentTime.slice(2));
		if(remainMinute < 0){
			remainMinute += 60;
			remainHour--;
		}
		result.push(`${zeroPad2(remainHour)}시간 ${zeroPad2(remainMinute)}분`);
	}
}

console.log(JSON.stringify(result));