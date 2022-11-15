function solution(n) {
    let answer = 0;
    for(let i = 1; i<Math.sqrt(n); i++){
        if(!(n % i)){
            answer += 2;
        }
    }
    if(Number.isInteger(Math.sqrt(n))){
        answer++;
    }
    return answer;
}