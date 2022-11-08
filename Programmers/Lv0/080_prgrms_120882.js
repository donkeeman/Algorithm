function solution(score) {
    const average = score.slice().map(([e, m]) => (e + m) / 2).sort((a, b) => b - a);
    const answer = score.map(([e, m]) => average.indexOf((e + m) / 2) + 1);
    return answer;
}