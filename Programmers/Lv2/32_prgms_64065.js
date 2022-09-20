function solution(s) {
    s = s.split(/[\{\},]/g).filter(c => c !== "");
    let answer = {};
    s.map(c => {
        if(answer[c]){
            answer[c]++;
        }
        else{
            answer[c] = 1;
        }
    });
    return Object.keys(answer).sort((a, b) => answer[b] - answer[a]).map(x => parseInt(x));
}