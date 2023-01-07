const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

let n = parseInt(input);
let [two, five] = [0, 0];

if (n < 5) {
    console.log(0);
}
else {
    for (let i = 2; i < n + 1; i++) {
        let j = i;
        while (!(j % 2)) {
            two++;
            j /= 2;
        }
        while (!(j % 5)) {
            five++;
            j /= 5;
        }
    }
    console.log(Math.min(two, five));
}