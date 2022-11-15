function solution(numbers, k) {
    if(!(numbers.length % 2)){
        numbers = numbers.filter((_, i) => !(i % 2));
    }
    else{
        numbers = numbers.filter((_, i) => !(i % 2)).concat(numbers.filter((_, i) => i % 2));
    }
    return numbers[(k - 1) % numbers.length];
}