const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const cantor = (n) => {
    if (n === 0) {
        return "-";
    } else {
        return cantor(n - 1) + " ".repeat(3 ** (n - 1)) + cantor(n - 1);
    }
};

const result = input.map((n) => cantor(parseInt(n)));
console.log(result.join("\n"));