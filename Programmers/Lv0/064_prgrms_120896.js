function solution(s) {
    const answer = new Map();
    s.split("").map(x => answer.set(x, answer.get(x) ? answer.get(x) + 1 : 1));
    return Array.from(answer.keys()).filter(key => answer.get(key) === 1).sort().join("");
}