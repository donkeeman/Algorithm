function solution(dartResult) {
    let answer = [];
    let score = "";
    for(let c of dartResult){
        if(!Number.isNaN(parseInt(c))){
            score += c;
        }
        else if(c === "*"){
            let sliced = answer.slice(-2);
            answer.pop();
            answer.pop();
            sliced.map(x => {
                answer.push(x * 2);
            })
        }
        else if(c === "#"){
            answer.push(answer.pop() * -1);
        }
        else{
            if(c === "S"){
                score = parseInt(score);
            }
            else if(c === "D"){
                score = parseInt(score)**2;
            }
            else if(c === "T"){
                score = parseInt(score)**3;
            }
            answer.push(score);
            score = "";
        }
    }
    return answer.reduce((a, b) => a+b, 0);
}