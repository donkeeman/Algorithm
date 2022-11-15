function solution(quiz) {
    // return quiz.map(quizElem => {
    //     const [expression, answer] = quizElem.split(" = ");
    //     return eval(expression) === parseInt(answer) ? "O" : "X";
    // });
    
    // eval 없이
    return quiz.map(quizElem => {
        const [operand1, operand2, answer] = quizElem.match(/-?\d+/g).map(x => parseInt(x));
        const [operator] = quizElem.match(/[^=\d] /g);
        switch(operator.trim()){
            case "+":
                return operand1 + operand2 === answer ? "O" : "X";
            case "-":
                return operand1 - operand2 === answer ? "O" : "X";
        }
    })
}