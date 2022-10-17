function solution(numbers) {
    let answer = new Set();
    numbers = numbers.split("");
    const length = numbers.length;
    dfs(numbers, "");
    return Array.from(answer).filter(x => isPrime(x)).length;
    
    function dfs(numbers, numStr) {
        if (numStr.length > length) {
            return;
        } else {
            if (!isNaN(parseInt(numStr))) {
                answer.add(parseInt(numStr));
            }
        }
        for (let i = 0; i < numbers.length; i++) {
            dfs(
                numbers.slice(0, i).concat(numbers.slice(i + 1)),
                numStr + numbers[i]
            );
        }
    }
    
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