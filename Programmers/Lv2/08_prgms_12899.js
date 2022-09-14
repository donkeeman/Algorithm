function solution(n) {
    let answer = "";
    while(n != 0){
        if(n%3 === 0){
            answer += 4;
        }
        else{
            answer += n%3;
        }
        n = Math.ceil(n/3) - 1;
    }
    return answer.split("").reverse().join("");
}