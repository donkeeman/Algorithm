const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let verticalString = "";
let count = 0;
let index = 0;
const maxLength = Math.max(...input.map((v) => v.length));

while (index < maxLength) {
    if (index < input[count].length) {
        verticalString += input[count][index];
    }
    count++;
    if (count >= input.length) {
        count = 0;
        index++;
    }
}