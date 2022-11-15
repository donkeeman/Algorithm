function solution(num, total) {
    const mid = parseInt(total / num);
    const answer = [mid];
    for(let i = 1; i<=parseInt(num/2); i++){
        answer.unshift(mid - i);
        answer.push(mid + i);
    }
    return !(num % 2) ? answer.slice(1) : answer;
}