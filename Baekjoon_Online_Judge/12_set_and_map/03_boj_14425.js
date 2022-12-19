const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const binarySearch = (start, end, key) => {
    if (strList[start] === key || strList[end] === key) {
        count++;
        return;
    }
    if (start >= end) {
        return;
    }
    const mid = parseInt((start + end) / 2);
    if (key > strList[mid]) {
        binarySearch(mid + 1, end, key);
    } else {
        binarySearch(start, mid, key);
    }
};

const [n, m] = input.shift().split(" ");
const strList = input.slice(0, n).sort();
const checkList = input.slice(-m);
let count = 0;
checkList.forEach((v) => binarySearch(0, strList.length - 1, v));
console.log(count);