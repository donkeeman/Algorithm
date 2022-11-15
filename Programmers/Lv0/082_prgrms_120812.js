function solution(array) {
    if(array.length === 0){
        return -1;
    }
    if(array.length === 1){
        return array[0];
    }
    const count = new Map();
    array.map(x => count.set(x, !count.get(x) ? 1 : count.get(x) + 1));
    const answer = Array.from(count.keys()).sort((a, b) => count.get(b) - count.get(a));
    return count.get(answer[0]) !== count.get(answer[1]) ? answer[0] : -1;
}