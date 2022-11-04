function solution(babbling) {
    let answer = 0;
    babbling.map(b => {
        let stack = [];
        let compareWord;
        let count = 0;
        if(b.length > 1){
           for(let i = 0; i<b.length; i++){
                stack.push(b[i]);
                const testWord2 = stack.slice(-2).join("");
                const testWord3 = stack.slice(-3).join("");
                if(compareWord === testWord2 || compareWord === testWord3){
                    break;
                }
                if(testWord2 === "ye" || testWord2 === "ma"){
                    count += stack.length - 2;
                    stack = [];
                    compareWord = testWord2;
                }
                else if(testWord3 === "aya" || testWord3 === "woo"){
                    count += stack.length - 3;
                    stack = [];
                    compareWord = testWord3;
                }
            }
            if(stack.length + count === 0){
                answer++;
            } 
        }
    })
    return answer;
}