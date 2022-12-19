const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

let countSum = 0;
let count = -1;

const merge = (arr, start, mid, end) => {
    let [i, j] = [start, mid + 1];
    const sorted = [];
    while (i <= mid && j <= end) {
        countSum++;
        if (arr[i] < arr[j]) {
            sorted.push(arr[i++]);
        } else {
            sorted.push(arr[j++]);
        }
        if (countSum === checkCount) {
            count = sorted[sorted.length - 1];
            break;
        }
    }
    while (i <= mid) {
        countSum++;
        sorted.push(arr[i++]);
        if (countSum === checkCount) {
            count = sorted[sorted.length - 1];
            break;
        }
    }
    while (j <= end) {
        countSum++;
        sorted.push(arr[j++]);
        if (countSum === checkCount) {
            count = sorted[sorted.length - 1];
            break;
        }
    }
    for (let index = 0; index <= end - start; index++) {
		arr[start + index] = sorted[index];
    }
};

const mergeSort = (arr, start, end) => {
    if (count !== -1) {
        return;
    }
    if (start < end) {
        const mid = parseInt((start + end) / 2);
        mergeSort(arr, start, mid);
        mergeSort(arr, mid + 1, end);
        merge(arr, start, mid, end);
    }
};

const [n, checkCount] = input[0].split(" ").map(v => parseInt(v));
const numArray = input[1].split(" ").map(v => parseInt(v));
mergeSort(numArray, 0, n - 1);
console.log(count);