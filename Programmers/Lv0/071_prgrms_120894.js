function solution(numbers) {
    const strArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i<strArray.length; i++){
        if(/^\d+$/.test(numbers)){
            break;
        }
        const regex = new RegExp(strArray[i], "g");
        numbers = numbers.replace(regex, i);
    }
    return parseInt(numbers);
}