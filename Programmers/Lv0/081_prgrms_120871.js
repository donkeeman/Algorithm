function solution(n) {
    const answer = [];
    let num = 1;
    let index = 0;
    while(index < n){
        if((num.toString().split("").filter(x => x === "3").length === 0) && (num % 3 !== 0)){
            answer.push(num);
            index++;
        }
        num++;
    }
    return answer[n - 1];
}