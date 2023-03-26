const fs = require("fs");
const n = parseInt(fs.readFileSync("/dev/stdin").toString().trim());

const checkPromising = (row) => {
    for (let i = 0; i < row; i++) {
        // 같은 열인지 검사
        if (queen[i] === queen[row]) {
            return false;
        }
        // 대각선인지 검사
        else if (Math.abs(queen[i] - queen[row]) === Math.abs(i - row)) {
            return false;
        }
    }
    return true;
}

const nQueens = (count) => {
    if (count === n) {
        answer++;
        return;
    }
    for (let i = 0; i < n; i++) {
    	queen[count] = i;
        if (checkPromising(count)) {
            nQueens(count + 1);
        }
    }
}

let answer = 0;
let queen = Array(n).fill(0);
nQueens(0);
console.log(answer);