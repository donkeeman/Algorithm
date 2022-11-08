function solution(s) {
    const stack = [];
    s.split(" ").map(x => {
        if(x === "Z"){
            stack.pop();
        }
        else{
            stack.push(x);
        }
    })
    return stack.reduce((a, b) => a + parseInt(b), 0);
}