function solution(s){
    // 처음에 생각했던 방법, 효율성 테스트 통과 못함
    // while(s.indexOf("()") !== -1){
    // s = s.replace(/\(\)/g, "");
    // }
    // return s.length === 0 ? true : false;
    
    let stack = [];
    for(let c of s){
        if(c === "("){
            stack.push(c);
        }
        else{
            if(stack.length === 0){
                return false;
            }
            stack.pop();
        }
    }
    return stack.length === 0 ? true : false;
}