function solution(a, b) {
    let denominator = b / gcd(a, b);
    while(!(denominator % 2)){
        denominator /= 2;
    }
    while(!(denominator % 5)){
        denominator /= 5;
    }
    return denominator === 1 ? 1 : 2;
    
    function gcd(num1, num2){
        while(num2 !== 0){
            const remainder = num1 % num2;
            num1 = num2;
            num2 = remainder;
        }
        return num1;
    }
}