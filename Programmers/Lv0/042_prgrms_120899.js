function solution(array) {
    const answer = Math.max(...array);
    return [answer, array.indexOf(answer)];
}