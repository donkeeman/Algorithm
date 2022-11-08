function solution(n) {
    const answer = [1];
    while(true){
        const factorial = answer[answer.length - 1] * answer.length;
        if(n < factorial){
            return answer.length - 1;
        }
        answer.push(factorial);
    }
}