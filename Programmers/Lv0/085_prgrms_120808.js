function solution(denum1, num1, denum2, num2) {
    const denum = denum1 * num2 + denum2 * num1;
    const num = num1 * num2;
    return [denum / gcd(denum, num), num / gcd(denum, num)];
    
    function gcd(num1, num2){
        while(num2 !== 0){
            const remainder = num1 % num2;
            num1 = num2;
            num2 = remainder;
        }
        return num1;
    }
}