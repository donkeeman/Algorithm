const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input = input[1].split(" ").map((v) => parseInt(v));
const sorted = Array.from(new Set(input)).sort((a, b) => a - b);
const result = [];
input.forEach((v) => binarySearch(0, sorted.length - 1, v));
console.log(result.join(" "));

function binarySearch(start, end, key) {
    if (sorted[start] === key) {
        result.push(start);
        return;
    } else if (sorted[end] === key) {
        result.push(end);
        return;
    }
    if (start >= end) {
        return;
    }
    const mid = parseInt((start + end) / 2);
    if (key > sorted[mid]) {
        binarySearch(mid + 1, end, key);
    } else {
        binarySearch(start, mid, key);
    }
}