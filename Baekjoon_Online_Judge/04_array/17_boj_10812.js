const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift().split(" ")[0]);
let basket = Array(n)
    .fill(0)
    .map((v, i) => i + 1);
input.forEach((arr) => {
    const [i, j, k] = arr.split(" ").map((v) => parseInt(v) - 1);
    basket = basket
        .slice(0, i)
        .concat(
            basket.slice(k, j + 1),
            basket.slice(i, k),
            basket.slice(j + 1)
        );
});

console.log(basket.join(" "));