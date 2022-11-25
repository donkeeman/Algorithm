function solution(k, ranges) {
    const answer = [];
    const collatz = [];
    while(k !== 1){
        let n = k;
        if(!(n % 2)){
            n /= 2;
        }
        else{
            n = n * 3 + 1;
        }
        collatz.push((k + n) / 2);
        k = n;
    }
    ranges.map(([start, offset]) => {
        answer.push(
            collatz.length + offset < start ? -1.0 
            : collatz.slice(start, collatz.length + offset).reduce((a, b) => a + b, 0))});
    return answer;
}