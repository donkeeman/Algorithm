function solution(n) {
    if(n === 1){
        return 1;
    }
    // BigInt 안 써도 됨
    // dp 피보나치와 같음
    // let answer = [1, 1];
    // for(let i = 2; i<n+1; i++){
    //     answer.push((answer[i - 1] + answer[i - 2]) % 1000000007);
    // }
    // return answer[n];
    // 배열 대신 3개의 변수만 사용할 수도 있음 (조금 더 빠름)
    let [prev1, prev2, answer] = [1, 1, 0];
    for(let i = 2; i<n+1; i++){
        answer = (prev1 + prev2) % 1000000007;
        prev1 = prev2;
        prev2 = answer;
    }
    return answer;
}