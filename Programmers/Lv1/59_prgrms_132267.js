function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        let temp = Math.floor(n / a);
        answer += temp * b;
        n -= temp * (a - b);
    }
    return answer;
}