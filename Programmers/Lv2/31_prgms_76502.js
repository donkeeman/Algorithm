function solution(s) {
    let answer = 0;
    let index = 0;
    let sArray = s + s;
    while(index < s.length){
        let test = sArray.slice(index, index + s.length);
        if(isValid(test)){
            answer++;
        }
        index++;
    }
    return answer;
}

function isValid(str){
    let stack = [];
    str.split("").map(s => {
        if((stack[stack.length - 1] === "(" && s === ")") || (stack[stack.length - 1] === "{" && s === "}") || (stack[stack.length - 1] === "[" && s === "]")){
            stack.pop();
        }
        else{
            stack.push(s);
        }
    })
    return stack.length > 0 ? false : true;
}