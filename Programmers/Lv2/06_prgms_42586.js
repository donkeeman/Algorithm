function solution(progresses, speeds) {
    let answer = [];
    while(progresses.length !== 0){
        let count = 0;
        progresses = progresses.map((v, i) => v + speeds[i]);
        while(progresses[0] >= 100){
            count++;
            progresses.shift();
            speeds.shift();
        }
        answer.push(count);
    }
    return answer.filter(x => x > 0);
}