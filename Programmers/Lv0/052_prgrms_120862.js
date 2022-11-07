function solution(numbers) {
    numbers = numbers.sort((a, b) => {
        if(a > b){
            return 1;
        }
        else{
            return -1;
        }
    });
    return Math.max(numbers.slice(-2).reduce((a, b) => a * b, 1), numbers[0] * numbers[1]);
}