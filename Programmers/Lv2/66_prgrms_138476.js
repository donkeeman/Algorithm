function solution(k, tangerine) {
    let answer = new Map();
    tangerine.map(t => answer.set(t, answer.get(t) ? answer.get(t) + 1 : 1));
    const sorted = Array.from(answer.values()).sort((a, b) => b - a);
    let sum = 0;
    for(let i = 0; i<sorted.length; i++){
        sum += sorted[i];
        if(sum >= k){
            return i + 1;
        }
    }
}