function solution(arrayA, arrayB) {
    let gcdA = arrayA[0];
    for(let i = 1; i<arrayA.length; i++){
        gcdA = getGcd(gcdA, arrayA[i]);
    }
    let gcdB = arrayB[0];
    for(let i = 1; i<arrayB.length; i++){
        gcdB = getGcd(gcdB, arrayB[i]);
    }
    const cdArray = Array.from(new Set(getCdArray(gcdA).concat(getCdArray(gcdB)))).sort((a, b) => b - a);
    cdArray.pop();
    if(!(cdArray.length)){
        return 0;
    }
    for(let i = 0; i<cdArray.length; i++){
        if((arrayA.filter(num => num % cdArray[i]).length === 0 && arrayB.filter(num => num % cdArray[i]).length === arrayB.length)
           || (arrayA.filter(num => num % cdArray[i]).length === arrayA.length && arrayB.filter(num => num % cdArray[i]).length === 0)){
            return cdArray[i];
            }
    }
    return 0;
    
    function getGcd(num1, num2 = num1){
        while(num2 !== 0){
            const remainder = num1 % num2;
            num1 = num2;
            num2 = remainder;
        }
        return num1;
    }
    
    function getCdArray(num){
        const result = [];
        for(let i = 1; i<=Math.sqrt(num); i++){
            if(!(num % i)){
                result.push(i, num / i);
            }
        }
        return result;
    }
}