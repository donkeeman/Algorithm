function solution(emergency) {
    const priority = emergency.slice().sort((a, b) => b - a);
    const answer = emergency.map(x => priority.indexOf(x) + 1);
    return answer;
}