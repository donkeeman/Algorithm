const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const total = parseInt(input.shift());
const n = input.shift();
let sum = 0;
input.map((arr) => {
        const [price, count] = arr.split(" ");
        sum += parseInt(price) * parseInt(count);
    });

console.log(sum === total ? "Yes" : "No");