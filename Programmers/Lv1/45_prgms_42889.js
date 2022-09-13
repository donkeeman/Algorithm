function solution(N, stages) {
    let answer = {};
    for(let i = 0; i<N; i++){
        // for-in의 i는 string
        let stageLength = stages.length;
        stages = stages.filter(stage => stage !== i+1);
        answer[i] = stages.length / stageLength;
    }
    return Object.keys(answer).sort((a, b) => answer[a] - answer[b]).map(x => parseInt(x)+1);
}