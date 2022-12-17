const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [n, m] = input.shift().split(" ").map(v => parseInt(v));
const matrix1 = input.slice(0, n).map(row => row.split(" ").map(v => parseInt(v)));
const matrix2 = input.slice(n).map(row => row.split(" ").map(v => parseInt(v)));

let result = Array(n).fill(0).map(v => Array(m).fill(0));
// for(let i = 0; i<n; i++){
// 	for(let j = 0; j<n; j++){
// 		result[i][j] = matrix1[i][j] + matrix2[i][j];
// 	}
// }
result = result.map((row, i) => row.map((cell, j) => matrix1[i][j] + matrix2[i][j]));

result.map(row => console.log(row.join(" ")));