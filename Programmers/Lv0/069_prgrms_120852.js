function solution(n) {
    const answer = new Set();
    const primeArray = eratosthenes(10000);
    for(let i = 0; i<primeArray.length; i++) {
        while(!(n % primeArray[i])){
            answer.add(primeArray[i]);
            n = parseInt(n / primeArray[i]);
        }
        if(n === 1){
            break;
        }
    }
    return [...answer];
    
    function eratosthenes(n){
        let sieve = Array(n).fill(true);
        sieve[0] = sieve[1] = false;
        for(let i = 2; i < sieve.length; i++){
            if(sieve[i]){
                for(let j = i + i; j < sieve.length; j += i){
                    if(sieve[j]){
                        sieve[j] = false;
                    }
                }
            }
        }
        return sieve.map((v, i) => v ? i : null).filter(x => x);
    }
}