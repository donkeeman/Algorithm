function solution(X, Y) {
    let xCount = {}, yCount = {};
    for(let c of X){
        if(xCount[c]){
            xCount[c]++;
        }
        else{
            xCount[c] = 1;
        }
    }
    for(let c of Y){
        if(yCount[c]){
            yCount[c]++;
        }
        else{
            yCount[c] = 1;
        }
    }
    Object.entries(xCount)
        .map(([key, value]) => {
            if(!yCount[key]){
                xCount[key] = 0;
            }
            if(yCount[key] < xCount[key]){
                xCount[key] = yCount[key];
            }
        })
    let answer = "";
    Object.entries(xCount).sort((a, b) => {
        if(a[0] > b[0]){
            return -1;
        }
        else{
            return 1;
        }
    }).map(([key, value]) => {
        for(let i = 0; i<value; i++){
            answer += key;
        }
    })
    if(answer === ""){
        return "-1";
    }
    if(parseInt(answer) === 0){
        return "0";
    }
    return answer;
}