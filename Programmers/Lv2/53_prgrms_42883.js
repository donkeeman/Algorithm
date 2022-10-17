function solution(number, k) {
    let answer = [];
    number = number.split("").map((x) => parseInt(x));
    let count = 0;
    let index = 0;
    while (true) {
        if(index === number.length){
            while(count !== k){
                answer.pop();
                count++;
            }
            break;
        }
        const num = number[index++]; // shift()는 시간 초과
        while (true) {
            if (answer.length === 0 || answer.slice(-1) >= num || count === k) {
                break;
            } else {
                answer.pop();
                count++;
            }
        }
        answer.push(num);
    }
    return answer.join("");
}