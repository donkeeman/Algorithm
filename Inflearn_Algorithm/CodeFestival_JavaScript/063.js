// 입력을 받을 때 처음부터 공백 기준으로 나눠 받음
const str = readline().split(" ");

// 첫 글자만 골라낸 다음 병합
console.log(str.map(c => c[0]).join(""));
