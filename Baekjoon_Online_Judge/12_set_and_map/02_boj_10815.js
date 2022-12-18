const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const ownCardList = input[1].split(" ").map(v => parseInt(v)).sort((a, b) => a - b);
const checkCardList = [];
input[3].split(" ").forEach(v => binarySearch(0, ownCardList.length - 1, parseInt(v)));
console.log(checkCardList.join(" "));

function binarySearch(start, end, key) {
    if (ownCardList[start] === key || ownCardList[end] === key) {
        checkCardList.push(1);
        return;
    }
    if (start >= end) {
        checkCardList.push(0);
        return 0;
    }
    const mid = parseInt((start + end) / 2);
    if (key > ownCardList[mid]) {
        binarySearch(mid + 1, end, key);
    } else {
        binarySearch(start, mid, key);
    }
}