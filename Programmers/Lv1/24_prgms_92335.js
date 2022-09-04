function isPrime(n){
    if(n < 2){
        return false;
    }
    for(let i = 2; i<=Math.sqrt(n); i++){
            if(n%i === 0){
                return false;
            }
        }
        return true;
}

function solution(n, k) {
    let numbers = parseInt(n).toString(k).split("0");
    let answer = numbers.filter(n => n).map(n => n = parseInt(n)).filter(n => isPrime(n));
    return answer.length;
}