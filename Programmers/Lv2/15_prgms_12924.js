function solution(n) {
    let answer = 1;
    let sum = 0;
    if(n < 3){
        return 1;
    }
    for(let i = 1; i <= parseInt(n/2)+1; i++){
        sum = 0;
        for(let j = i; j <= parseInt(n/2)+1; j++){
            sum += j;
            if(sum == n){
                answer++;
                break;
            }
            else if(sum > n){
                break;
            }
        }
    }
    return answer;
}