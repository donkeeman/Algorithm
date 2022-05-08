const now = new Date();
// 현재 날짜의 객체를 생성하지 않으려면 Date.now()를 쓰는 방법도 있음

// getTime()이 밀리초를 반환하므로 밀리초/초/분/시간/일 순서로 나눠주면 
// 몇 년이 흘렀는지 구할 수 있음
const year = parseInt(now.getTime()/1000/60/60/24/365);

// 시작 연도가 1970년이므로 1970을 더해줌
console.log(1970 + year);
