function fibonacci(n){
    let fiboArr = [0, 1];
    for(let i = 2; i < n+1; i++){
        fiboArr[i] = BigInt(fiboArr[i - 2]) + BigInt(fiboArr[i - 1]);    
    }
    return fiboArr[n];
}

function solution(n) {
    return fibonacci(n) % 1234567n;
}