function solution(n) {
    const answer = new Set();
    for(let i = 1; i<=Math.sqrt(n); i++){
        if(!(n % i)){
            answer.add(n / i);
            answer.add(i);
        }
    }
    return Array.from(answer).sort((a, b) => a - b);
}