function solution(A, B) {
    let answer = -1;
    A += A;
    for(let i = A.length - B.length; i > 0; i--){
        if(A.slice(i, i + B.length) === B){
            answer = B.length - i;
        }
    }
    return answer;
}