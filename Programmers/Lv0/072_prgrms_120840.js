function solution(balls, share) {
    const factorial = getFactArr(Math.max(balls, share));
    return factorial[balls] / factorial[balls - share] / factorial[share];
    
    function getFactArr(n){
        const result = [BigInt(1)];
        for(let i = 1; i < n + 1; i++){
            result.push(BigInt(i) * result[i - 1]);
        }
        return result;
    }
}