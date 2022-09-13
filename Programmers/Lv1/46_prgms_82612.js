function solution(price, money, count) {
    let answer = price;
    for(let i = 2; i<count+1; i++){
        answer += price * i;
    }
    return answer - money > 0 ? answer - money : 0;
}