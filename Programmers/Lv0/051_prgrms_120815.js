function solution(n) {
    let answer = 0;
    while(true){
        answer++;
        if(!(6 * answer % n)){
            break;
        }
    }
    return answer;
}