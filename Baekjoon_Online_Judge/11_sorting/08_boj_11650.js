const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

input.shift();

const sorted = input.sort((point1, point2) => {
    const [x1, y1] = point1.split(" ");
    const [x2, y2] = point2.split(" ");
    if (parseInt(x1) !== parseInt(x2)) {
        return parseInt(x1) - parseInt(x2);
    } else {
        return parseInt(y1) - parseInt(y2);
    }
});

console.log(sorted.join("\n"));