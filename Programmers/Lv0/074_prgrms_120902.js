function solution(my_string) {
    // return eval(my_string);
    const operators = my_string.match(/[^\d ]/g);
    const operands = my_string.match(/[\d]+/g).map(x => parseInt(x));
    let answer = operands.shift();
    operators.map(operator => {
        if(operator === "+"){
            answer += operands.shift();
        }
        else{
            answer -= operands.shift();
        }
    })
    return answer;
}