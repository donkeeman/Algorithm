function solution(numbers) {
    let answer = 45;
    for(let i of numbers){
        answer -= i;
    }
    return answer;
}