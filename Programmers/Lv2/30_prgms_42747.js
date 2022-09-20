function solution(citations) {
    if(citations.reduce((a, b) => a + b, 0) === 0){
        return 0;
    }
    let num = 0;
    let answer = [];
    let max = Math.max(...citations);
    while(num <= max){
        let count = citatiaons.filter(citation => citation >= num);
        let others = citations.filter(citation => citation < num);
        if(others.length === others.filter(citation => citation <= count.length).length){
            answer.push(count.length);
        }
        num++;
    }
    return Math.min(...answer);
}