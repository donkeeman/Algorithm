function solution(k, score) {
    const answer = [];
    let honor = [];
    score.map(s => {
        honor.push(s);
        honor = honor.sort((a, b) => a - b);
        if(honor.length > k){
            honor.shift();
        }
        answer.push(honor[0]);
    })
    return answer;
}