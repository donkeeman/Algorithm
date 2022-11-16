function solution(lines) {
    let max = -101, min = 101;
    lines.map(([start, end]) => {
        if(start < min){
            min = start;
        }
        if(end > max){
            max = end;
        }
    })
    let answer = Array(max - min).fill(0);
    lines.map(([start, end]) => {
        for(let i = start; i < end; i++){
            answer[i - min]++;
        }
    });
    answer = answer.join("").match(/[2-9]+/g);
    return answer ? answer.join("").length : 0;
}