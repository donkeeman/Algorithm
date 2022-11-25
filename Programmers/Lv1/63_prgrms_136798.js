function solution(number, limit, power) {
    const answer = Array(number).fill(0).map((_, i) => limit >= getCDCount(i + 1) ? getCDCount(i + 1) : power).reduce((a, b) => a + b, 0);
    return answer;
    
    function getCDCount(n){
        let count = 0;
        for(let i = 1; i<Math.sqrt(n); i++){
            if(!(n % i)){
                count += 2;
            }
        }
        if(Number.isInteger(Math.sqrt(n))){
            count++;
        }
        return count;
    }
}