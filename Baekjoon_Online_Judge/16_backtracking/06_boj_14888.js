const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let max = -1000000000;
let min = 1000000000;
const num = input[1].split(" ").map((v) => parseInt(v));
let [add, sub, mul, div] = input[2]
    .split(" ")
    .map((v) => parseInt(v));

const calculate = (answer, index, add, sub, mul, div) => {
    if (index >= num.length) {
        max = Math.max(max, answer);
        min = Math.min(min, answer);
        return;
    }
    if (add > 0) {
        calculate(answer + num[index], index + 1, add - 1, sub, mul, div);
    }
    if (sub > 0) {
        calculate(answer - num[index], index + 1, add, sub - 1, mul, div);
    }
    if (mul > 0) {
        calculate(answer * num[index], index + 1, add, sub, mul - 1, div);
    }
    if (div > 0) {
        calculate(parseInt(answer / num[index]), index + 1, add, sub, mul, div - 1);
    }
};

calculate(num[0], 1, add, sub, mul, div);

// -0에 주의
if(max === -0){
	max = 0;
}
if(min === -0){
	min = 0;
}
console.log(max, min);