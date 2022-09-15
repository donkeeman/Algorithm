function solution(n) {
    const nBinCount = n.toString(2).replace(/0/g, "").length;
    let answer = n + 1;
    while(true){
        if(answer.toString(2).replace(/0/g, "").length === nBinCount){
            return answer;
        }      
        answer++;
    }
}