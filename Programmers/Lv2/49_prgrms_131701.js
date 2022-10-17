function solution(elements) {
    let answer = new Set();
    elements = elements.concat(elements);
    for(let i = 1; i<=elements.length / 2; i++){
        for(let j = 0; j<elements.length - i; j++){
            const sum = elements.slice(j, i + j).reduce((a, b) => a + b, 0);
            answer.add(sum);
        }
    }
    return answer.size;
}