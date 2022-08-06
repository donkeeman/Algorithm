let fs = require("fs");
const inputArray = fs.readFileSync("/dev/stdin").toString().split(" ");
const chessArray = [1, 1, 2, 2, 2, 8];
let answer = "";

for(let i = 0; i < 6; i++){
    answer += chessArray[i] - parseInt(inputArray[i]) + " ";
}

console.log(answer);