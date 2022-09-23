function solution(numbers) {
    let answer = numbers.map(x => x.toString()).sort((a, b) => (b + a) - (a + b)).join("");
    return parseInt(answer) === 0 ? "0" : answer;
}