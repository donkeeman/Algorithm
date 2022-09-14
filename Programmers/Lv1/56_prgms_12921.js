function eratosthenes(n) {
    let sieve = Array(n+1).fill(true);
    sieve[0] = sieve[1] = false;
    for(let i = 2; i<sieve.length; i++){
        if(sieve[i]){
            for(let j = i+i; j < sieve.length; j += i){
                sieve[j] = false;
            }
        }
        else{
            continue;
        }
    }
    return sieve.filter(value => value === true).length;
}

function solution(n) {
    return eratosthenes(n);
}