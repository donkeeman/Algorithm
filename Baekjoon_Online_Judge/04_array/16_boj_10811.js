const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = parseInt(input.shift().split(" ")[0]);
console.log(n)
let basket = Array(n)
    .fill(0)
    .map((v, i) => i + 1);
console.log(basket)
input.forEach((arr) => {
    const [i, j] = arr.split(" ").map((v) => parseInt(v) - 1);
    basket = basket
        .slice(0, i)
        .concat(basket.slice(i, j + 1).reverse(), basket.slice(j + 1));
});

console.log(basket.join(" "));