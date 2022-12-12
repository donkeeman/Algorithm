function solution(k, d) {
    let answer = 0;
    for(let i = 0; i<=d; i+=k){
        answer += parseInt(Math.sqrt(d**2 - i**2) / k) + 1;
    }
    return answer;
}