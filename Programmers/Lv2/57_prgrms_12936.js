function solution(n, k) {
    const answer = [];
    let numbers = Array(n).fill(0).map((x, i) => i + 1);
    // 순열을 재귀로 구하면 시간 초과
    const fact = getFactorial(n);
    while(n > 0){
        if(k === 0){
            answer.push(...numbers.reverse());
            break;
        }
        if(k === 1){
            answer.push(...numbers);
            break;
        }
        const num = Math.ceil(k / (fact[n-1] / n)) - 1;
        k %= fact[n-1] / n;
        answer.push(numbers[parseInt(num)]);
        numbers.splice(parseInt(num), 1);
        n--;
    }
    return answer;
    
    function getFactorial(n){
        let factorial = [1];
        // index 0 = 1!, 1 = 2!, ...
        for(let i = 1; i < n; i++){
            factorial.push(factorial[i-1] * (i + 1));
        }
        return factorial;
    }
}