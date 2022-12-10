function solution(s) {
    const answer = [];
    s.split("").map((c, i) => {
        const lastIndex = s.slice(0, i).lastIndexOf(c);
        answer.push(lastIndex === -1 ? lastIndex : i - lastIndex); 
    })
    return answer;
}