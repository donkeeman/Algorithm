function solution(ingredient) {
    let answer = 0;
    const stack = [];
    for(let i = 0; i<ingredient.length; i++){
        stack.push(ingredient[i]);
        if(stack.slice(-4).join("") === "1231"){
            answer++;
            for(let i = 0; i<4; i++){
                stack.pop();
            }
        }
    }
    return answer;
}