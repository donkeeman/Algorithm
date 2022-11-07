function solution(n) {
    let answer = 0;
    for(let i = 2; i<n+1; i++){
        if(!isPrime(i)){
            answer++;
        }
    }
    return answer;
    
    function isPrime(n){
        if(n < 2){
            return false;
        }
        for(let i = 2; i<=Math.sqrt(n); i++){
            if(n % i === 0){
                return false;
            }
        }
        return true;
    }
}