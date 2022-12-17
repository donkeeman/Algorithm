const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let board = Array(100)
    .fill(0)
    .map((v) => Array(100).fill(0));
const n = input.shift();
input
    .map((v) => v.split(" ").map((v) => parseInt(v)))
    .map(([row, col]) => {
        for (let i = row; i < row + 10; i++) {
            for (let j = col; j < col + 10; j++) {
                if (!board[i][j]) {
                    board[i][j] = 1;
                }
            }
        }
    });

const area = board.flat().filter((v) => v).length;
console.log(area);