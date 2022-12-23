const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input
    .shift()
    .split(" ")
    .map((v) => parseInt(v));

const chess1 =
    "BWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWB";
const chess2 =
    "WBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBWWBWBWBWBBWBWBWBW";

let answer = 64;

for (let i = 0; i <= n - 8; i++) {
    for (let j = 0; j <= m - 8; j++) {
        const subMatrix = input.slice(i, i + 8).map((row) => row.slice(j, j + 8)).join("");
        let [count1, count2] = [0, 0];
        for (let index in subMatrix) {
            if (subMatrix[index] !== chess1[index]) {
                count1++;
            }
            if (subMatrix[index] !== chess2[index]) {
                count2++;
            }
        }
        answer = Math.min(answer, count1, count2);
    }
}

console.log(answer);