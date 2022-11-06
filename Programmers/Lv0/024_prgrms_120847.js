function solution(numbers) {
    numbers = numbers.sort((a, b) => {
        if(a - b > 0){
            return -1;
        }
        else{
            return 1;
        }
    });
    return numbers[0] * numbers[1];
}