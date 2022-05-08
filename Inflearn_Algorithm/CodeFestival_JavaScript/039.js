let string = readline();

// replace도 있고, replaceAll도 있음
// 둘 다 원본에서 바뀌는 것이 아니라 새로운 문자열을 리턴함
// replace로도 정규식을 이용해서 replaceAll과 같은 동작을 할 수 있음
// replaceAll은 ideone 버전에서는 동작하지 않지만 두 코드는 같은 역할을 함
// console.log(string.replaceAll("g", "e");
console.log(string.replace(/q/g, "e"));