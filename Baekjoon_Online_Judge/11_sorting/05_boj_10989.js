const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\r\n");

// 계수 정렬 -> 원소의 최댓값까지의 카운트 배열을 만들고 원소의 값을 인덱스로 하여 등장한 횟수를 채워 넣는 방법
// 정렬할 원소의 수가 적을 때 빠름 ( O(N + 원소의 최댓값) )

// 코드는 맞으나 백준에선 메모리 초과로 풀리지 않아 C++로 재풀이
input.shift();
const numArr = input.map((v) => parseInt(v));
const maxNum = Math.max(...numArr);

let count = Array(maxNum + 1).fill(0);
numArr.map((v) => count[v]++);
count.map((v, i) => {
    for (let index = 0; index < v; index++) {
        console.log(i);
    }
});