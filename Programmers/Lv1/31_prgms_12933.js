function solution(n) {
    let answer = 0;
    answer = parseInt(n.toString().split("").sort((a, b) => a - b < 0 ? 1 : -1).join(""));
    return answer;
}