function solution(s){
    let answer = 0;

    s.toLowerCase().replace(/[^(?!py)]/g, "").split("").map(c => c === "p" ? answer++ : answer--);
    
    return answer === 0;
}